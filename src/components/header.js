import React from 'react'

import headerStyles from './header.module.scss';

const Header = () => {
    return (
        <nav className={headerStyles.navWrap}>
            <ul id="nav" className={headerStyles.navList}>                
                <li>
                    <a className={headerStyles.navItem} href="#home">Home</a>
                </li>
                <li>
                    <a className={headerStyles.navItem} href="#about">About</a>
                </li>
                <li>
                    <a className={headerStyles.navItem} href="#works">Works</a>
                </li>
                <li>
                    <a className={headerStyles.navItem} href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header
