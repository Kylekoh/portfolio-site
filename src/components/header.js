import React, {useState} from 'react'
import { FaKorvue, FaBars } from "react-icons/fa";

import headerStyles from './header.module.scss';

const Header = () => {

    const [menuToggle, setMenuToggle] = useState(false)

    const handleToggle = () => {
        setMenuToggle(!menuToggle)
        console.log(menuToggle)
    }

    return (
            <nav className={headerStyles.navWrap}>
                <div className={headerStyles.logo}>
                    <FaKorvue/>
                    <span>Kyle's Portfoilo</span>
                </div>
                <ul id="nav" className={headerStyles.navMenu}>                
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#works">Works</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <div  onClick={handleToggle} className={`headerStyles.toggleButton  + menuToggle ? 'headerStyles.toggleShow' :''`}> 
                    <FaBars />
                </div>
            </nav>
    )
}

export default Header;
