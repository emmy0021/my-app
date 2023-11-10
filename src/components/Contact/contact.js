import React from "react";
import "./contact.css";
import linkedInLogo from "../../assets/linkedin-icon.png"
import githubLogo from "../../assets/github-logo.png"
import instagramLogo from "../../assets/instagram-icon.png"

const Contact = () => {
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact me</h1>
                <span className="contactDesc">Please fill out the form below to contact me.</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name"></input>
                    <input type="email" className="email" placeholder="Your Email"></input>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button className="submitBtn" type="submit" value="send">Submit</button>
                    <div className="links">
                        <img src={linkedInLogo} alt="LinkedIn" className="link"></img>
                        <img src={githubLogo} alt="Github" className="link"></img>
                        <img src={instagramLogo} alt="Instagram" className="link"></img>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;