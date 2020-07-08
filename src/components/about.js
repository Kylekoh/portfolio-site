import React from "react"

import aboutStyles from "./about.module.scss"

const About = () => {
  return (
    <section id="about" className={aboutStyles.aboutWrap}>
      <div className={aboutStyles.aboutContainer}>
        <div className={aboutStyles.textContainer}>
          <h1>ABOUT</h1>
        </div>
        <div className={aboutStyles.imgContainer}>
          <img
            className={aboutStyles.profilePic}
            src={require("../images/mypicture.jpg")}
          />
          <p>
            날씨가 너무나도 좋았다. 뭉게구름이 너무나 이쁘게 피어있었다.날씨가
            너무나도 좋았다. 뭉게구름이 너무나 이쁘게 피어있었다.날씨가 너무나도
            좋았다. 뭉게구름이 너무나 이쁘게 피어있었다.날씨가 너무나도 좋았다.
            뭉게구름이 너무나 이쁘게 피어있었다.날씨가 너무나도 좋았다.
            뭉게구름이 너무나 이쁘게 피어있었다.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
