import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLetterizeText, useStartTextAnimation, } from '../../hooks/useLetterizeText';

import './home.scss';

const Home = () => {
    const { pageLoaded, textRef, scope } = useStartTextAnimation()

    const spellingTitle = useLetterizeText("Nataliia Shpaniuk");

    return (
        <section className="home">
            <div className="home__wrapper">
                <div className={pageLoaded ? 'show' : 'hide'}
                ref={textRef}>
                <AnimatePresence>
                    <h1
                        className="home__title"
                            aria-label="Nataliia Shpaniuk"
                        ref={scope}
                    >
                        {spellingTitle}
                    </h1>
                </AnimatePresence>
            </div>
                <p className="home__subtitle">PR-manager</p>
                <Link to="/contacts" className="btn">Contact me</Link>
            </div>
        </section>
    )
}

export default Home;