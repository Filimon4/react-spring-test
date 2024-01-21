import React, { useState } from 'react'
import {useSpring, animated} from "react-spring"

const Spring = () => {
    const [currentState, setCurrentState] = useState(0)

    const [spring2, api] = useSpring(() => ({
      from: {x: currentState},
      onChange: (ev) => {
        setCurrentState(ev.value.x)
      }
    }))
    
    const handleMouseEnter = () => {
      api.start({
        from: { x: currentState },
        to: { x: 500 },
        config: {duration: 5000}
      })
    }
  
    const handleMouseLeave = () => {
      api.start({
        from: { x: currentState},
        to: { x: 0 },
        config: { duration: 2000}
      })
    }
  
    return (
      <div>
        <h1>Hello</h1>
        <br/>
        <animated.div 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            ...spring2,
            width: "100px",
            height: "100px",
            backgroundColor: "red",
            borderRadius: "50%"
          }} 
        />
      </div>
    )
}

export default Spring