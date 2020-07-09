import React from "react"

import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaBlogger,
} from "react-icons/fa"
import { FiMail } from "react-icons/fi"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <section id="contact" className={footerStyles.footerWrap}>
      <p>저에 대해 더 알고싶다면?</p>
      <div className={footerStyles.socialIcons}>
        <a
          href="https://github.com/Kylekoh"
          className={footerStyles.socialButtons}
          target="_blank"
          rel="noreferrer"
        >
          <span className={footerStyles.socialIconItem}>
            <FaGithub />
          </span>
        </a>
        <a
          href="https://velog.io/@ko12ztwe"
          className={footerStyles.socialButtons}
          target="_blank"
          rel="noreferrer"
        >
          <span className={footerStyles.socialIconItem}>
            <FaBlogger />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/kylekoh16/"
          className={footerStyles.socialButtons}
          target="_blank"
          rel="noreferrer"
        >
          <span className={footerStyles.socialIconItem}>
            <FaLinkedin />
          </span>
        </a>
        <a
          href="https://www.instagram.com/koztwe/"
          className={footerStyles.socialButtons}
          target="_blank"
          rel="noreferrer"
        >
          <span className={footerStyles.socialIconItem}>
            <FaInstagramSquare />
          </span>
        </a>
      </div>
      <div className={footerStyles.mailWrap}>
        <p className={footerStyles.mailContainer}>
          <FiMail />
          <span>ykoh728@gmail.com</span>
        </p>
      </div>
      <div className={footerStyles.right}>
        <span>&#169; 2020. All rights reserved.</span>
      </div>
    </section>
  )
}

export default Footer
