import React from 'react'

import techlistStyles from './techlist.module.scss';


const TechList = () => {
    return (
        <section className={techlistStyles.techListWrap}>
            <div className={techlistStyles.techListContainer}>
                <div className={techlistStyles.techTitle}>
                    <h1>Frontend</h1>
                </div>
                <ul className={techlistStyles.techList}>
                    <div className={techlistStyles.techItem}>
                        <div className={techlistStyles.techWrap}>
                            <div className={techlistStyles.imgContainer}>
                                <img alt="HTML" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"></img>
                            </div>
                            <div className={techlistStyles.textContainer}>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className={techlistStyles.techItem}>
                        <div className={techlistStyles.techWrap}>
                            <div className={techlistStyles.imgContainer}>
                                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png"></img>
                            </div>
                            <div className={techlistStyles.textContainer}>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className={techlistStyles.techItem}>
                        <div className={techlistStyles.techWrap}>
                            <div className={techlistStyles.imgContainer}>
                                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/292px-Javascript_badge.svg.png"></img>
                            </div>
                            <div className={techlistStyles.textContainer}>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className={techlistStyles.techItem}>
                        <div className={techlistStyles.techWrap}>
                            <div className={techlistStyles.imgContainer}>
                                <img alt="" src="https://cdn.worldvectorlogo.com/logos/react-2.svg"></img>
                            </div>
                            <div className={techlistStyles.textContainer}>
                                <h3>React JS</h3>
                            </div>
                        </div>
                    </div>
                    <div className={techlistStyles.techItem}>
                        <div className={techlistStyles.techWrap}>
                            <div className={techlistStyles.imgContainer}>
                                <img alt="" src="https://dakishatest.blog/static/gatsby-logo-b9f26a3d8b2476c97cb59a1299909d85.png"></img>
                            </div>
                            <div className={techlistStyles.textContainer}>
                                <h3>Gatsby JS</h3>
                            </div>
                        </div>
                    </div>
                </ul>
                <div className={techlistStyles.techTitle}>
                    <h1>Backend</h1>
                </div>
                <ul className={techlistStyles.techList}>
                    <div className={techlistStyles.techItem}>
                        <div className={techlistStyles.techWrap}>
                            <div className={techlistStyles.imgContainer}>
                                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1180px-Node.js_logo.svg.png"></img>
                            </div>
                            <div className={techlistStyles.textContainer}>
                                <h3>Node JS</h3>
                            </div>
                        </div>
                    </div>
                    <div className={techlistStyles.techItem}>
                        <div className={techlistStyles.techWrap}>
                            <div className={techlistStyles.imgContainer}>
                                <img alt="" src="https://cdn.worldvectorlogo.com/logos/express-109.svg"></img>
                            </div>
                            <div className={techlistStyles.textContainer}>
                                <h3>Express</h3>
                            </div>
                        </div>
                    </div>
                    <div className={techlistStyles.techItem}>
                        <div className={techlistStyles.techWrap}>
                            <div className={techlistStyles.imgContainer}>
                                <img alt="" src="https://4.bp.blogspot.com/-rtNRVM3aIvI/XJX_U07Z-II/AAAAAAAAJXY/YpdOo490FTgdKOxM4qDG-2-EzcNFAWkKACK4BGAYYCw/s1600/logo%2Bfirebase%2Bicon.png"></img>
                            </div>
                            <div className={techlistStyles.textContainer}>
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>

                </ul>
                <div className={techlistStyles.techTitle}>
                    <h1>Frameworks & Tools</h1>
                </div>
                <ul className={techlistStyles.techList}>
                <div className={techlistStyles.techItem }>
                    <div className={techlistStyles.techWrap}>
                        <div className={techlistStyles.imgContainer}>
                            <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/768px-Electron_Software_Framework_Logo.svg.png"></img>
                        </div>
                        <div className={techlistStyles.textContainer}>
                            <h3>Electron JS</h3>
                        </div>
                    </div>
                    </div>
                    <div className={techlistStyles.techItem}>
                        <div className={techlistStyles.techWrap}>
                            <div className={techlistStyles.imgContainer}>
                                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png"></img>
                            </div>
                            <div className={techlistStyles.textContainer}>
                                <h3>GraphQL</h3>
                            </div>
                        </div>
                    </div>
                    <div className={techlistStyles.techItem}>
                        <div className={techlistStyles.techWrap}>
                            <div className={techlistStyles.imgContainer}>
                                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/1024px-Font_Awesome_5_brands_github.svg.png"></img>
                            </div>
                            <div className={techlistStyles.textContainer}>
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                    <div className={techlistStyles.techItem}>
                        <div className={techlistStyles.techWrap}>
                            <div className={techlistStyles.imgContainer}>
                                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1024px-Sass_Logo_Color.svg.png"></img>
                            </div>
                            <div className={techlistStyles.textContainer}>
                                <h3>Sass</h3>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </section>
    )  
}

export default TechList
