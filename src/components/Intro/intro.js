import React from "react";
import './intro.css';
import btnImg from '../../assets/suitcase-icon.png';
import { Link } from "react-scroll";
import bg from "../../assets/background-headshot.png";


const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Emmanuel</span> <br />Software Engineer </span>
                <p className="introPara">I am a skilled full stack software developer with <br/> experience in creating visually appealing and <br/> user friendly websites.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire me" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}

export default Intro;