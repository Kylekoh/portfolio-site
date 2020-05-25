import React from 'react'

import Header from "../components/Header"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"

import "./layout.css"


const Layout = () => {
    return (
    <>
        <Header />
        <About />
        <Portfolio />
        <Contact />
    </>
    )
}

export default Layout
