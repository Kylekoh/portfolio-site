import React from "react"

import techlistStyles from "./techlist.module.scss"

const TechList = () => {
  const front_lists = [
    {
      title: "HTML",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      title: "CSS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png",
    },
    {
      title: "Javascript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/292px-Javascript_badge.svg.png",
    },
    {
      title: "React",
      image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      title: "Redux",
      image: "https://redux.js.org/img/redux.svg",
    },
    {
      title: "Gatsby",
      image:
        "https://dakishatest.blog/static/gatsby-logo-b9f26a3d8b2476c97cb59a1299909d85.png",
    },
  ]

  const back_lists = [
    {
      title: "Node JS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1180px-Node.js_logo.svg.png",
    },
    {
      title: "Express",
      image: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    },
    {
      title: "Firebase",
      image:
        "https://4.bp.blogspot.com/-rtNRVM3aIvI/XJX_U07Z-II/AAAAAAAAJXY/YpdOo490FTgdKOxM4qDG-2-EzcNFAWkKACK4BGAYYCw/s1600/logo%2Bfirebase%2Bicon.png",
    },
  ]
  const framework_lists = [
    {
      title: "Electron JS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/768px-Electron_Software_Framework_Logo.svg.png",
    },
    {
      title: "Github",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/1024px-Font_Awesome_5_brands_github.svg.png",
    },
    {
      title: "Sass",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1024px-Sass_Logo_Color.svg.png",
    },
    {
      title: "Styled-Components",
      image:
        "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png",
    },
  ]

  return (
    <section className={techlistStyles.techListWrap}>
      <div className={techlistStyles.techListContainer}>
        <div className={techlistStyles.techTitle}>
          <h1>Frontend</h1>
        </div>
        <ul className={techlistStyles.techList}>
          {front_lists.map(list => (
            <div className={techlistStyles.techItem}>
              <div className={techlistStyles.techWrap}>
                <div className={techlistStyles.imgContainer}>
                  <img alt={list.title} src={list.image}></img>
                </div>
                <div className={techlistStyles.textContainer}>
                  <h3>{list.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </ul>
        <div className={techlistStyles.techTitle}>
          <h1>Backend</h1>
        </div>
        <ul className={techlistStyles.techList}>
          {back_lists.map(list => (
            <div className={techlistStyles.techItem}>
              <div className={techlistStyles.techWrap}>
                <div className={techlistStyles.imgContainer}>
                  <img alt={list.title} src={list.image}></img>
                </div>
                <div className={techlistStyles.textContainer}>
                  <h3>{list.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </ul>
        <div className={techlistStyles.techTitle}>
          <h1>Frameworks & Tools</h1>
        </div>
        <ul className={techlistStyles.techList}>
          {framework_lists.map(list => (
            <div className={techlistStyles.techItem}>
              <div className={techlistStyles.techWrap}>
                <div className={techlistStyles.imgContainer}>
                  <img alt={list.title} src={list.image}></img>
                </div>
                <div className={techlistStyles.textContainer}>
                  <h3>{list.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TechList
