import React, { useEffect, useState } from 'react';
import { useTransition, animated } from "react-spring";

const COLORS = ['ORANGE', 'PINK', 'RED']

const FunColorAuto = () => {
    const [colors, setColors] = useState(COLORS)
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(i => (i + 1)%COLORS.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        setColors(COLORS[activeIndex])
        setTimeout(() => {     
            setColors([])       
        }, 1000)
    },[activeIndex])

    const transition2 = useTransition(colors, {
        from: { opacity: 0, transform: "perspective(600px) rotateX(180deg)" },
        enter: { opacity: 1, transform: "perspective(600px) rotateX(0deg)"},
        leave: { opacity: 0, transform: "perspective(600px) rotateX(180deg)"},
        config: { duration: 150 }
    })

    return (
        <div>
            <h1>UseTransition</h1>
            <br />
            {transition2((styles, item) => {
                return (
                    <animated.div
                        
                        style={{
                            ...styles,
                            color: item,
                            fontWeight: '1000',
                            fontSize: "70px"
                        }}
                    >
                    {item}
                    </animated.div>
                )
            })}
        </div>
    );
}

export default FunColorAuto