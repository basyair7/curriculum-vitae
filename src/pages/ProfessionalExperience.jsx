import React from "react";
import Header from "../components/Header";
import "animate.css";
import ProfessionalExperienceData from "../data/professional-experience";

const ProfessionalExperience = () => {
    return (<>
        <div className="container-fluid p-0">
            <Header />
            <section className="resume-section animate__animated animate__fadeIn" id="professionalexperience">
                <ProfessionalExperienceData />
            </section>
            {/* <hr className="m-0" /> */}
        </div>
    </>);
};

export default ProfessionalExperience;