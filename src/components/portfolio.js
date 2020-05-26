import React from 'react'

import portfolioStyles from './portfolio.module.scss';


const Portfolio = () => {
    return (
        <section id="portfolio" className={portfolioStyles.portfolioWrap}>
            <div className={portfolioStyles.portfolioContainer}>
                <div className={portfolioStyles.portfolioText}>
                    <h1>My Portfolio</h1>
                    <h2>Here is my portfolio</h2>
                </div>
                
                <ul className={portfolioStyles.portfolioList}>
                    <div className={portfolioStyles.portfolioItem}>
                        <div className={portfolioStyles.portfolioContainer}>
                            <img alt="" src=""></img>
                        </div>
                    </div>
                    <div className={portfolioStyles.portfolioItem}>
                        <div className={portfolioStyles.portfolioContainer}>
                            <img alt="" src=""></img>
                        </div>
                    </div>
                    <div className={portfolioStyles.portfolioItem}>
                        <div className={portfolioStyles.portfolioContainer}>
                            <img alt="" src=""></img>
                        </div>
                    </div>
                </ul>
                
            </div>
        </section>
    )  
}

export default Portfolio