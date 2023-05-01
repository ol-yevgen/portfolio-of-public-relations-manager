import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { useChangeLanguage } from '../../hooks/useChangeLanguage';
import { homeTextDataUa, homeTextDataEn } from '../../data/sectionData/homeSectionTextData';
import { useLetterizeText, useStartTextAnimation, } from '../../hooks/useLetterizeText';

import './home.scss';

const Home = () => {
    const language = useChangeLanguage(homeTextDataUa, homeTextDataEn)

    const { pageLoaded, textRef, scope } = useStartTextAnimation()
    const spellingTitle = useLetterizeText(language.title);

    return (
        <section className="home">
            <div className="home__wrapper">
                <div className={pageLoaded ? 'show' : 'hide'}
                    ref={textRef}>
                    <AnimatePresence>
                        <h1
                            className="home__title"
                            aria-label={language.title}
                            ref={scope}
                        >
                            {spellingTitle}
                        </h1>
                    </AnimatePresence>
                </div>
                <p className="home__subtitle">{language.subtitle}</p>
                <Link to="/contacts" className="btn">{language.contactButton}</Link>
            </div>
        </section>
    )
}

export default Home;