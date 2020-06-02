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
                        <div className={portfolioStyles.portfolioImage}></div>
                        <div className={portfolioStyles.textContainer}>
                            <div className={portfolioStyles.text}>
                                <h2>Move UR Heart</h2>
                                <p>ReactJS/Responsive</p>
                            </div>
                            <button onClick={firstModalToggle} className={portfolioStyles.button}>더 알아보기</button>
                        </div>
                    </div>
                    <div className={portfolioStyles.portfolioItem}>
                        <div className={portfolioStyles.portfolioImage}></div>
                        <div className={portfolioStyles.textContainer}>
                            <div className={portfolioStyles.text}>
                                <h2>Move UR Heart</h2>
                                <p>ReactJS/Responsive</p>
                            </div>
                            <button onClick={firstModalToggle} className={portfolioStyles.button}>더 알아보기</button>
                        </div>
                    </div>
                    <div className={portfolioStyles.portfolioItem}>
                        <div className={portfolioStyles.portfolioImage}></div>
                        <div className={portfolioStyles.textContainer}>
                            <div className={portfolioStyles.text}>
                                <h2>Move UR Heart</h2>
                                <p>ReactJS/Responsive</p>
                            </div>
                            <button onClick={firstModalToggle} className={portfolioStyles.button}>더 알아보기</button>
                        </div>
                    </div>
                </ul>
                <ModalPortfolio />
            </div>
        </section>
        

    )
}

export default Portfolio