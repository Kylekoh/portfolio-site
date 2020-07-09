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
            src={require("../images/kyleKoh.png")}
          />
          <p>
            안녕하세요, <strong>프론트앤드 개발자 고영일</strong>입니다. <br />
            내 손으로 유에서 무를 만들어낼 수 있는 코딩에 매력을 느껴 개발을
            시작하게 되었습니다. 생각을 시각적으로 표현하고 이를 통해 소통하는
            일에 관심이 많습니다. <br />
            매일 배우고 성장해나가는 삶을 지향합니다.
            <br /> 여가 시간에는 주로 운동을 하거나 책과 함께 하고 있습니다
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
