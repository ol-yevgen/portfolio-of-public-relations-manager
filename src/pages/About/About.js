import { v4 as uuidv4 } from 'uuid';
import { AnimatePresence } from 'framer-motion';

import { useStartSpallingAnimation } from '../../hooks/useSpallingAnimate';
import aboutSectionData from '../../data/aboutSectionData';
import cv from '../../data/cv.pdf';

import './about.scss';

const About = () => {
    const { pageLoaded,iconsRef, scopeSkillIcons } =
        useStartSpallingAnimation(
            0.1,
            'div, h2, p, ul, a',
            { opacity: 1, y: '0%', visibility: 'visible' },
            { opacity: 0, y: '30%', visibility: 'hidden' },
            0.8
        )

    const aboutSections = (arr) => {
        return arr.map((section, index) => {
            return (
                <div className="about__column" key={index}>
                    <h2 className="title">{section.title}</h2>
                    <ul className="about__list">
                        {section.services.map(service => {
                            return (
                                <li className="about__list-item" key={uuidv4()}>{service}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        })
    }

    const section = aboutSections(aboutSectionData)

    return (
        <section className="about" >
            <AnimatePresence>
                <div className={pageLoaded ? 'show' : 'hide'}
                    ref={iconsRef}
                >
                    <div className="about__wrapper" ref={scopeSkillIcons}>

                        <div className="about__column biography">
                            <h2 className="title">ABOUT ME</h2>
                            <p className="about__text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, praesentium
                                libero. Consectetur, inventore ipsam. Maiores nulla architecto ullam, consequatur
                                nam quo dolorum saepe unde tenetur laudantium asperiores quod quos! Cum?

                            </p>
                            <a href={cv} className="btn" download>Download CV</a>
                        </div>
                        {section}
                    </div>

                </div>
            </AnimatePresence>
        </section >
    )
}

export default About;