import React from 'react'


import headerStyles from './header.module.scss';

const Header = () => {
    return (
        <headder tabIndex="-1" >
            <div className={headerStyles.home}>
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
                <div className={headerStyles.banner}>
                    <div className={headerStyles.bannerText}>
                        <h1>I'm Kyle Koh</h1>
                        <h3>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </h3>
                        <hr></hr>
                    </div>
                </div >
            </div>
        </headder>
    )
}

export default Header;
