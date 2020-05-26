import React from 'react'

import techStyles from './tech.module.scss';


const Tech = () => {
    return (
        <section id="tech" className={techStyles.techWrap}>
            <div className={techStyles.techTextContainer}>
                <div className={techStyles.techText}>
                    <h1>My Skills</h1>
                    <h2>I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to try designing and building my own.</h2>
                </div>
            </div>
            </section>
    )  
}

export default Tech
