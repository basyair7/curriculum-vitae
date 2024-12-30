import React from "react";
import Header from "../components/Header";
import { Analytics } from "@vercel/analytics/react";
import "animate.css";

import AboutData from "../data/about";
import ProfessionalExperienceData from "../data/professional-experience";
import EducationData from "../data/education";
import OrgExperienceData from "../data/organization-experience";
import SkillsData from "../data/skills";
import InterestData from "../data/interest";
import ProjectsData from "../data/projects";

const Home = () => {
    return (<>
        <div className="container-fluid p-0">
            <Header />
            <section className="resume-section animate__animated animate__fadeInDown" id="about">
                <Analytics />
                <AboutData />
            </section>
            <hr className="m-0" />

            <section className="resume-section" id="experience">
                <ProfessionalExperienceData />
            </section>
            <hr className="m-0" />

            <section className="resume-section" id="organization">
                <OrgExperienceData />
            </section>
            <hr className="m-0" />

            <section className="resume-section" id="education">
                <EducationData />
            </section>
            <hr className="m-0" />

            <section className="resume-section" id="skills">
                <SkillsData />
            </section>
            <hr className="m-0" />

            <section className="resume-section" id="interests">
                <InterestData />
            </section>
            <hr className="m-0" />

            <section className="resume-section" id="projects">
                <ProjectsData />
            </section>
        </div>
    </>);
};

export default Home;