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
                        <div className={portfolioStyles.card}></div>
                        <div className={portfolioStyles.text}>
                            <div>Node JS</div>
                            <p>This is fantastic</p>
                        </div>
                        <div className={portfolioStyles.button}>더 알아보기</div>
                    </div>
                    <div className={portfolioStyles.portfolioItem}>
                        <div className={portfolioStyles.portfolioContainer}>
                            <button onClick={secondModalToggle}>두번째 포트폴리오</button>
                            <img alt="" src="https://images.unsplash.com/photo-1590541576391-dfc42314a7ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"></img>
                        </div>
                    </div>
                </ul>
                <ModalPortfolio />
            </div>
        </section>
        

    )
}

export default Portfolio