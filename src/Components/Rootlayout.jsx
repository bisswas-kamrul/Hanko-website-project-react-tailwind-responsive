import React from 'react'
import Header from './Layout/Header'
import { Outlet } from 'react-router'
import Futter from './Layout/Futter'

const Rootlayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Futter/>
    </>
  )
}

export default Rootlayout