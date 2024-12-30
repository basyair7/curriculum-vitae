import React from "react";
import Header from "../components/Header";
import "animate.css";

import SkillsData from "../data/skills";

const Skills = () => {
    return (<>
        <div className="container-fluid p-0">
            <Header />
            <section className="resume-section animate__animated animate__fadeIn" id="skills">
                <SkillsData />
            </section>
            {/* <hr className="m-0" /> */}
        </div>
    </>);
};

export default Skills;