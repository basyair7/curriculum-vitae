import React from "react";
import Header from "../components/Header";
import "animate.css";
import EducationData from "../data/education";

const Education = () => {
    return (<>
        <div className="container-fluid p-0">
            <Header />
            <section className="resume-section animate__animated animate__fadeIn" id="education">
                <EducationData />
            </section>
            {/* <hr className="m-0" /> */}
        </div>
    </>);
};

export default Education;