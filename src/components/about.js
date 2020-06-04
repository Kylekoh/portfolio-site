import React from 'react'

import aboutStyles from './about.module.scss';


const About = () => {
    return (
        <section id="about" className={aboutStyles.aboutWrap}>
            <div className={aboutStyles.aboutContainer}>
                <div className={aboutStyles.textContainer}>
                    <h1>ABOUT</h1>
                </div>
                <div className={aboutStyles.imgContainer}>
                    <img className={aboutStyles.profilePic} src="https://scontent-gmp1-1.xx.fbcdn.net/v/t1.0-1/c50.50.620.620a/s160x160/417555_411630715560331_645666905_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_oc=AQmclovjRG8eIsUIETMnPla71sspejiG0A-Y76CsGyjx5kR9V9QJrHhXQA9HEDLapY4&_nc_ht=scontent-gmp1-1.xx&oh=419cfefecca4d699ee3195a9e2274782&oe=5EF141C4"></img>
                    <p>날씨가 너무나도 좋았다. 뭉게구름이 너무나 이쁘게 피어있었다.날씨가 너무나도 좋았다. 뭉게구름이 너무나 이쁘게 피어있었다.날씨가 너무나도 좋았다. 뭉게구름이 너무나 이쁘게 피어있었다.날씨가 너무나도 좋았다. 뭉게구름이 너무나 이쁘게 피어있었다.날씨가 너무나도 좋았다. 뭉게구름이 너무나 이쁘게 피어있었다.</p>
                </div>
            </div>
        </section>
    )
}

export default About;