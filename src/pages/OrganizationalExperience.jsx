import React from "react";
import Header from "../components/Header";
import "animate.css";

import OrgExperienceData from "../data/organization-experience";

const OrganizationalExperience = () => {
    return (<>
        <div className="container-fluid p-0">
            <Header />
            <section class="resume-section animate__animated animate__fadeIn" id="organizationalexperience">
                <OrgExperienceData />
            </section>
            {/* <hr className="m-0" /> */}
        </div>
    </>);
};

export default OrganizationalExperience;