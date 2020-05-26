import React from 'react'

import portfolioStyles from './portfolio.module.scss';


const Portfolio = () => {
    return (
        <section id="portfolio" className={portfolioStyles.portfolioWrap}>
            <div className={portfolioStyles.portfolioContainer}>
                <div>
                    <h3>My Portfolio</h3>
                    <span>Here is my portfolio</span>
                </div>
                
            </div>
        </section>
    )  
}

export default Portfolio