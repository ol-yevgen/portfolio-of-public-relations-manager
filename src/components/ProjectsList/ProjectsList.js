import PropTypes from 'prop-types';
import MyProject from "../MyProject/MyProject";
import { v4 as uuidv4 } from 'uuid';
import { AnimatePresence } from 'framer-motion';

import { useStartSpallingAnimation } from '../../hooks/useSpallingAnimate';
import { useLetterizeText, useStartTextAnimation, } from '../../hooks/useLetterizeText';

const ProjectsList = ({ title, text, projects }) => {
    const { pageLoaded, textRef, scope } = useStartTextAnimation()

    const spellingTitle = useLetterizeText(title);
    const { iconsRef, scopeSkillIcons } = useStartSpallingAnimation(0.1,
        'div, p, li',
        { opacity: 1, y: '0%', visibility: 'visible' },
        { opacity: 0, y: '50%', visibility: 'hidden' },
        0.9)

    const project = (arr) => {
        if (arr.length === 0) {
            return <h4 className="discription__title">No projects</h4>
        }
        return arr.map(({ ...props }) => {
            return <MyProject key={uuidv4()} {...props} />
        })
    }

    const elements = project(projects);
    return (
        <AnimatePresence>
            <div className={pageLoaded ? 'show' : 'hide'}
                ref={iconsRef}>
                <div className="portfolio__content" ref={scopeSkillIcons}>
                    <div className={pageLoaded ? 'show' : 'hide'}
                        ref={textRef}>
                        <h3 className="title subtitle" ref={scope}>{spellingTitle}</h3>
                    </div>
                    <p className="portfolio__text">
                        {text}
                    </p>

                    <ul className="portfolio__items" >
                        {elements}
                    </ul>
                </div>
            </div>
        </AnimatePresence>
    )
}

ProjectsList.propTypes = {
    projectId: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    projects: PropTypes.array,
}

export default ProjectsList;