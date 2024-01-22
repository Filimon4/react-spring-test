import React, { useState } from 'react'
import "./App.css"
import Transition from './UseTransition'
import Spring from './UseSpring'
import FunColorAuto from './FunColorAuto'
import CouruselBasic from './CouruselBasic'
import CouruselImgs from './CoruselImgs'
import Hero from './Hero'
import Footer from './Footer'
import ContentSection from './ContentSection'

const transitionStyle1 = {
  from: { opacity: 0, display: "none" },
  enter: { opacity: 1, display: "block" },
  leave: { opacity: 0, display: "none" },
};

const transitionStyle2 = {
  from: { opacity: 0, transform: "scale(0)", display: "none" },
  enter: { opacity: 1, transform: "scale(1)", display: "block" },
  leave: { opacity: 0, transform: "scale(0)", display: "none" },
};

const transitionStyle3 = {
  from: { opacity: 0, transform: "rotateX(180deg)", display: "none" },
  enter: { opacity: 1, transform: "rotateX(0deg)", display: "block" },
  leave: { opacity: 0, transform: "rotateX(180deg)", display: "none" },
};
const transitionStyle4 = {
  from: { opacity: 0, transform: "rotateZ(180deg)", display: "none" },
  enter: { opacity: 1, transform: "rotateZ(0deg)", display: "block" },
  leave: { opacity: 0, transform: "rotateZ(180deg)", display: "none" },
};

const App = () => {
  return (
    <>
      {/* <Spring /> */}
      {/* <Transition /> */}
      {/* <FunColorAuto /> */}
      {/* <CouruselBasic /> */}
      {/* <CouruselImgs /> */}
      <Hero />

      <ContentSection reverse={true} transitionStyle={transitionStyle1}/>
      <ContentSection transitionStyle={transitionStyle2} />
      <ContentSection reverse={true} transitionStyle={transitionStyle3}/>
      <ContentSection transitionStyle={transitionStyle4}/>

      <Footer />
    </>
  )
}

export default App