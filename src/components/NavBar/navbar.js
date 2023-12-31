import React, { useState } from "react";
import './navbar.css';
import logo from "../../assets/logo.jpg";
import contactImg from '../../assets/chat-bubble-icon.png'
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Use smooth scrolling for a nicer transition
        });
      };

    return (
            <nav className="navBar">
                <img src={logo} alt="logo" className="logo" style={{ cursor: 'pointer' }} onClick={scrollToTop} />
                <div className="desktopMenu">
                    <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
                </div>
                <button className="desktopMenuBtn" onClick={() => {
                    document.getElementById('contact').scrollIntoView({behavior: "smooth"});
                }}>
                    <img src={contactImg} className="desktopMenuImg" />
                    Contact Me
                </button>

                <img src={menu} alt="menu" className="mobileMenu" onClick={() => setShowMenu(!showMenu)}/>
                <div className="navMenu" style={{display: showMenu? "flex": "none"}}>
                    <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
                    <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
                </div>
            </nav>
        )
}

export default Navbar;