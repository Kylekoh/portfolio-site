import React, { useState, useContext } from "react"

import ModalPortfolio from "../components/modalPortfolio"
import portfolioStyles from "./portfolio.module.scss"

import { PortfolioContext } from "../components/layout"

const Portfolio = () => {
  const { firstModalToggle, secondModalToggle, thirdModalToggle } = useContext(
    PortfolioContext
  )

  return (
    <section id="portfolio" className={portfolioStyles.portfolioWrap}>
      <div className={portfolioStyles.portfolioContainer}>
        <div className={portfolioStyles.portfolioText}>
          <h1>PORTFOLIO</h1>
          <p>Here is my portfolio</p>
        </div>
        <ul className={portfolioStyles.portfolioList}>
          <div className={portfolioStyles.portfolioItem}>
            <img
              className={portfolioStyles.portfolioImage}
              src={require("../images/football-stat1.png")}
            />
            <div className={portfolioStyles.textContainer}>
              <div className={portfolioStyles.text}>
                <h2>Football-Stat</h2>
                <p>React / Redux / React Hooks</p>
              </div>
              <button
                onClick={firstModalToggle}
                className={portfolioStyles.button}
              >
                더 알아보기
              </button>
            </div>
          </div>
          <div className={portfolioStyles.portfolioItem}>
            <img
              className={portfolioStyles.portfolioImage}
              src={require("../images/keyword-collector.png")}
            />
            <div className={portfolioStyles.textContainer}>
              <div className={portfolioStyles.text}>
                <h2>Keyword Collector</h2>
                <p>React / NodeJS / Electron</p>
              </div>
              <button
                onClick={secondModalToggle}
                className={portfolioStyles.button}
              >
                더 알아보기
              </button>
            </div>
          </div>
          <div className={portfolioStyles.portfolioItem}>
            <img
              className={portfolioStyles.portfolioImage}
              src={require("../images/move-your-heart.png")}
            />
            <div className={portfolioStyles.textContainer}>
              <div className={portfolioStyles.text}>
                <h2>Move Your Heart</h2>
                <p>React / Responsive</p>
              </div>
              <button
                onClick={thirdModalToggle}
                className={portfolioStyles.button}
              >
                더 알아보기
              </button>
            </div>
          </div>
        </ul>
        <ModalPortfolio />
      </div>
    </section>
  )
}

export default Portfolio
