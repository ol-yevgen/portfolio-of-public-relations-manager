import { useEffect, useState, useRef } from "react";
import { useAnimate, stagger, } from 'framer-motion';

export const useStartSpallingAnimation = (delay, tags, initial, animation, duration) => {
    const iconsRef = useRef(null);
    const [pageLoaded, setPageLoaded] = useState(false);
    const scopeSkillIcons = useAnimation(pageLoaded, delay, tags, initial, animation, duration);

    useEffect(() => {
        const interval = setTimeout(() => {
            setPageLoaded(true)
        }, 300)

        return () => clearTimeout(interval)
    }, [iconsRef])

    return { pageLoaded, scopeSkillIcons }
}

export const useAnimation = (pageLoaded, delay, tags, initial, animation, duration) => {

    const staggerMenuItems = stagger(delay);

    const [scope, animate] = useAnimate();

    useEffect(() => {
         animate(
            tags,
            pageLoaded
                ? initial
                : animation,
            {
                duration: duration,
                ease: "easeOut",
                delay: pageLoaded ? staggerMenuItems : 0,
            }
        );
    }, [
        pageLoaded,
        animate,
        staggerMenuItems,
        delay,
        tags,
        initial,
        animation,
        duration
    ])

    return scope
}

