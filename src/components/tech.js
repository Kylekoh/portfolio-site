import React from "react"

import techStyles from "./tech.module.scss"

const Tech = () => {
  return (
    <section id="skills" className={techStyles.techWrap}>
      <div className={techStyles.techTextContainer}>
        <div className={techStyles.techText}>
          <h1>SKILLS</h1>
        </div>
      </div>
    </section>
  )
}

export default Tech
