import React, { useContext } from "react"

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
        </div>
        <ul className={portfolioStyles.portfolioList}>
          <div className={portfolioStyles.portfolioItem}>
            <img
              className={portfolioStyles.portfolioImage}
              src={require("../images/football-stat1.png")}
              alt="project"
            />
            <div className={portfolioStyles.textContainer}>
              <div className={portfolioStyles.text}>
                <h2>Football-Stat</h2>
                <p>React / Typescript / React Hooks / Redux</p>
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
              alt="project"
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
              alt="project"
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
