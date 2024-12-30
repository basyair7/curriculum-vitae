import React from "react";
import Header from "../components/Header";
import "animate.css";

import ProjectsData from "../data/projects";

const Projects = () => {
    return (<>
        <div className="container-fluid p-0">
            <Header />
            <section className="resume-section animate__animated animate__fadeIn" id="projects">
                <ProjectsData />
            </section>
            {/* <hr className="m-0" /> */}
        </div>
    </>);
};

export default Projects;