import React, {useState} from "react";
import "./Courusel.css";
import { useTransition, animated } from "react-spring";

const CouruselBasic = ({slides = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]}) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const transition = useTransition([currentSlide], {
        from: {opacity: 0, display: "none"},
        enter: {opacity: 1, display: "block"},
        leave: {opacity: 0, display: "none"}
    })

    const handleNextSlide = () => {
        setCurrentSlide(i => (i+1)%slides.length)
    }

    const handlePrevSlide = () => {
        setCurrentSlide(i => (i-1+slides.length)%slides.length)
    }

    return (
        <div className="courusel-container">
            <button onMouseDown={handlePrevSlide}>Prev</button>
            <div className="slides">
                {transition((styles, item) => {
                    return (
                        <animated.div style={{...styles}}>
                            {slides[currentSlide]}
                        </animated.div>
                    )
                })}
            </div>
            <button onMouseDown={handleNextSlide}>Next</button>
        </div>
    );
};

export default CouruselBasic;
