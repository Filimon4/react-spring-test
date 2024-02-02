import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <h1>HomePage</h1>
        <p>I'm web developer and this is my awesome{'(maybe)'} wesite for react-spring {'(test purposes)'}</p>
        <a href="https://github.com/Filimon4">This is my github</a>
    </div>
  )
}

export default HomePage