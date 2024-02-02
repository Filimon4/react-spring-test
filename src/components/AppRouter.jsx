import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const AppRouter = () => {
  return (
    <>
        <NavBar />
        <Outlet />
    </>
  )
}

export default AppRouter