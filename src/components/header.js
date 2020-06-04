import React, {useState} from 'react'
import { FaKorvue, FaBars } from "react-icons/fa";

import headerStyles from './header.module.scss';

const Header = () => {

    const [menuToggle, setMenuToggle] = useState(false)

    const handleToggle = () => {
        setMenuToggle(!menuToggle)
    }

    // handleMenuBar = () => {
        
    // }

    return (
            <nav id="home" className={headerStyles.navWrap}>
                <div className={headerStyles.navContainer}>
                    <a href="#home" className={headerStyles.logo}>
                        <FaKorvue/>
                        <span>Kyle's Portfoilo</span>
                    </a>
                    <ul className={`${headerStyles.navMenu} ${menuToggle ? `${headerStyles.toggleShow}` : ''}`}>                
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <a  onClick={handleToggle} className={headerStyles.toggleButton}> 
                        <FaBars />
                    </a>
                </div>
            </nav>
    )
}

export default Header;
