import React, { useState, useContext } from 'react'

import ModalPortfolio from '../components/modalPortfolio'
import portfolioStyles from './portfolio.module.scss';

import { PortfolioContext } from '../components/layout'


const Portfolio = () => {

    const {firstModalToggle, secondModalToggle} = useContext(PortfolioContext)

    return (
        <section id="portfolio" className={portfolioStyles.portfolioWrap}>
            <div className={portfolioStyles.portfolioContainer}>
                <div className={portfolioStyles.portfolioText}>
                    <h1>My Portfolio</h1>
                    <h2>Here is my portfolio</h2>
                </div>
                <ul className={portfolioStyles.portfolioList}>
                    <div className={portfolioStyles.portfolioItem}>
                        <button onClick={firstModalToggle}>첫번째 포트폴리오</button>
                        <div className={portfolioStyles.portfolioContainer}>
                            <img alt="" src=""></img>
                        </div>
                    </div>
                    <div className={portfolioStyles.portfolioItem}>
                        <button onClick={secondModalToggle}>두번째 포트폴리오</button>
                        <div className={portfolioStyles.portfolioContainer}>
                            <img alt="" src=""></img>
                        </div>
                    </div>
                </ul>
                <ModalPortfolio />
            </div>
        </section>
        

    )
}

export default Portfolio