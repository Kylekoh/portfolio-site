import React from 'react'

import Header from "../components/Header"
import About from "../components/About"
import Tech from "../components/Tech"
import TechList from "../components/TechList"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

import "./layout.css"


const Layout = () => {
    return (
    <>
        <Header />
        <About />
        <Tech />
        <TechList />
        <Portfolio />
        <Contact />
        <Footer />
    </>
    )
}

export default Layout
