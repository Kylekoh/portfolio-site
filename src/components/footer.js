import React from 'react'

import {FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedin} from 'react-icons/fa'
import { FiMail } from "react-icons/fi";

import footerStyles from './footer.module.scss';


const Footer = () => {
    return (
        <section id='contact' className={footerStyles.footerWrap}>
            <p>저에 대해 더 알고싶다면?</p>
            <div className={footerStyles.socialIcons}>
                <a href="https://www.instagram.com/koztwe/" className={footerStyles.socialButtons}>
                    <span className={footerStyles.socialIconItem}>
                        <FaInstagramSquare />
                    </span>
                </a>
                <a href="https://www.facebook.com/young.i.koh" className={footerStyles.socialButtons}>
                    <span className={footerStyles.socialIconItem}>
                        <FaFacebookF />
                    </span>
                </a>
                <a href="https://github.com/Kylekoh" className={footerStyles.socialButtons}>
                    <span className={footerStyles.socialIconItem}>
                        <FaGithub />
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/kylekoh16/" className={footerStyles.socialButtons}>
                    <span className={footerStyles.socialIconItem}>
                        <FaLinkedin />
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
                <span>
                    &#169; 2020. All rights reserved.
                </span>
            </div>
        </section>
    )
}

export default Footer