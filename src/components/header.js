import React, {useState} from 'react'
import { FaKorvue, FaBars } from "react-icons/fa";

import headerStyles from './header.module.scss';

const Header = () => {

    const [menuToggle, setMenuToggle] = useState(false)

    const handleToggle = () => {
        setMenuToggle(!menuToggle)
    }

    return (
            <nav className={headerStyles.navWrap}>
                <a href="#home" className={headerStyles.logo}>
                    <FaKorvue/>
                    <span>Kyle's Portfoilo</span>
                </a>
                <ul className={`${headerStyles.navMenu} ${menuToggle ? `${headerStyles.toggleShow}` : ''}`}>                
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
                <a  onClick={handleToggle} className={headerStyles.toggleButton}> 
                    <FaBars />
                </a>
            </nav>
    )
}

export default Header;
