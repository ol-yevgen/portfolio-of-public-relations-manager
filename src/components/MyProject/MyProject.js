import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import { useImageLazyLoading } from '../../hooks/useImageLazyLoading'
import placeholder from '../../assets/placeholder-image.png';

const MyProject = ({ image, subtitle, link }) => {
    const imageLazyLoading = useImageLazyLoading(image)
    return (
        <AnimatePresence>
            <motion.li
                className="portfolio__item"
                style={{ backgroundImage: `url(${imageLazyLoading || placeholder})` }}
                initial={{ opacity: 0, transform: 'translateY(10%)', transition: {delay: .2} }}
                animate={{ opacity: 1, transform: 'translateY(0%)', transition: { duration: .8, ease: 'easeOut'} }}
            >
                <div className="discription">
                    <div className="discription__wrapper">
                        <h4 className="discription__title" aria-label={subtitle}>{subtitle.toUpperCase()}</h4>
                        <a href={link} target='_blank' rel="noreferrer">read more</a>
                    </div>
                </div>
            </motion.li>
        </AnimatePresence>
        
    )
}

MyProject.propTypes = {
    image: PropTypes.string,
    subtitle: PropTypes.string,
    link: PropTypes.string,
}

export default MyProject;