import React from "react";
import "./skills.css";
import cppImg from "../../assets/C++_logo.png"
import javaImg from "../../assets/java-logo-1.png"
import reactImg from "../../assets/react-logo.png"

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique, massa eu tincidunt lacinia</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={cppImg} alt="c++" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>C++ programming</h2>
                        <p>I am flutent in C++ language</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={javaImg} alt="Java" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Java programming</h2>
                        <p>I am fluent in the Java language</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={reactImg} alt="React app design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>React.js</h2>
                        <p>I can create React.js applications</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;