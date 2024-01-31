import React, {useState} from "react";
import { useTransition, animated } from "react-spring";

const DATA = [1, 2, 3];
const COLORS = ['ORANGE', 'PINK', 'RED']

const Transition = () => {
    const [colors, setColors] = useState(COLORS)

    // const transitions = useTransition(COLORS, {
    //     from: { opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0},
    //     config: {duration: 1000}
    // })

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
            <div
                style={{height: "220px"}}
                className="color-container" 
                onMouseEnter={() => setColors(COLORS)}
                onMouseLeave={() => setColors([])}
            > 
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
        </div>
    );
};

export default Transition;
