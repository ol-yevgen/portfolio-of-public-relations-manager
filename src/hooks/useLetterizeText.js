import { Fragment, useEffect, useState, useRef } from "react"
import { motion, useAnimate, stagger, } from 'framer-motion';

export const useLetterizeText = (str) => {

    const letterizeText = str.split('').map((letter, index) => {

        if (letter === ' ') {
            return ' '
        } else if (letter === ',') {
            return <Fragment key={index}>
                <motion.span
                    id={index}
                >
                    {letter}
                </motion.span>
                <br />
            </Fragment>
        } else {
            return <motion.span
                id={index}
                key={index}
            >{letter}</motion.span>
        }

    })
    return letterizeText;
}

export const useStartTextAnimation = () => {
    const [pageLoaded, setPageLoaded] = useState(false);

    const scope = useLetterAnimation(pageLoaded);
    const textRef = useRef(null);

    useEffect(() => {
        const interval = setTimeout(() => {
            setPageLoaded(true)
        }, 400)

        return () => clearTimeout(interval)
    }, [textRef])

    return { pageLoaded, scope, textRef }
}

export const useLetterAnimation = (pageLoaded) => {

    const staggerMenuItems = stagger(0.08);

    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            'span',
            pageLoaded
                ? { opacity: 1, rotate: 0}
                : { opacity: 0, rotate: -90},
            {
                duration: 0.2,
                delay: pageLoaded ? staggerMenuItems : 0,
                type: 'spring'
            }
        );
    }, [pageLoaded, animate, staggerMenuItems])

    return scope
}