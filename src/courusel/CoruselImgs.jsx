import React, {useEffect, useState} from "react";
import './Courusel.css'
import { useTransition, animated } from "react-spring";

import vecrotImg from './assets/vector2.webp'

const CouruselImgs = ({slides = [], transitionStyle}) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(i => (i+1)%slides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const transition = useTransition([currentSlide], transitionStyle)

    const handleNextSlide = () => {
        setCurrentSlide(i => (i+1)%slides.length)
    }

    const handlePrevSlide = () => {
        setCurrentSlide(i => (i-1+slides.length)%slides.length)
    }

    return (
        <div className="courusel-container">
            <button className="btn btn-next" onMouseDown={handlePrevSlide}>&#10094;</button>
            <div className="slides">
                {transition((styles, item) => {
                    return (
                        <animated.div
                            className='slide'
                            style={{
                                ...styles,
                                width: "100%",
                                height: "100%",
                                backgroundImage: `url(${slides[currentSlide]})`
                            }}
                        >

                        </animated.div>
                    )
                })}
            </div>
            <button className='btn btn-prev' onMouseDown={handleNextSlide}>&#10095;</button>

            <div className="vector-frame">
                <img src={vecrotImg} alt="style" className='vector' />
            </div>
        </div>
    );
};

export default CouruselImgs;
