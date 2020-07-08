import React, { useState } from "react"

import Header from "../components/Header"
import About from "../components/About"
import Tech from "../components/Tech"
import TechList from "../components/TechList"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"

import "./layout.css"

export const PortfolioContext = React.createContext()

const Layout = () => {
  const [firstModalState, setFirstModalState] = useState(false)
  const [secondModalState, setSecondModalState] = useState(false)
  const [thirdModalState, setThirdModalState] = useState(false)

  const firstModalToggle = () => {
    setFirstModalState(!firstModalState)
  }

  const secondModalToggle = () => {
    setSecondModalState(!secondModalState)
  }

  const thirdModalToggle = () => {
    setThirdModalState(!thirdModalState)
  }
  return (
    <>
      <PortfolioContext.Provider
        value={{
          firstModalState,
          secondModalState,
          thirdModalState,
          firstModalToggle,
          secondModalToggle,
          thirdModalToggle,
        }}
      >
        <Header />
        <About />
        <Tech />
        <TechList />
        <Portfolio />
        <Footer />
      </PortfolioContext.Provider>
    </>
  )
}

export default Layout
