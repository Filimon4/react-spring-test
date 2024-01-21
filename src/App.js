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

const App = () => {
  return (
    <>
      {/* <Spring /> */}
      {/* <Transition /> */}
      {/* <FunColorAuto /> */}
      {/* <CouruselBasic /> */}
      {/* <CouruselImgs /> */}
      <Hero />

      <ContentSection reverse={true}/>
      <ContentSection />
      <ContentSection reverse={true}/>
      <ContentSection />

      <Footer />
    </>
  )
}

export default App