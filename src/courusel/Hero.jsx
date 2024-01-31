import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

import "./hero.css";

const DATA = ["Welcome to the Carousel", "This is a sample landing page with carousels!"];

const Hero = () => {
    const [heading, setHeading] = useState(false)

    const transition = useTransition([heading], {
        from: {opacity: 0, transform: 'translateY(-50px)'},
        enter: {opacity: 1, transform: 'translateY(0px)'},
        leave: {opacity: 0, transform: 'translateY(-50px)'},
        config: {duration: 800 },
    })

    useEffect(() => {
        setHeading(true)
    }, [])

    return (
        <div className="hero-container">
            {
                transition((styles, item) =>(
                    <animated.div
                        style={styles}
                    >
                        {item && <>
                            <h1 className="hero-heading">Welcome the the Carousel</h1>
                            <p className="hero-subheading">This is simple landing page with carousels!</p>
                        </>}
                    </animated.div>
                ))
            }
        </div>
    );
};

export default Hero;
