import React from "react";
import Header from "../components/Header";
import "animate.css";
import InterestData from "../data/interest";

const Interest = () => {
    return (<>
        <div className="container-fluid p-0">
            <Header />
            <section class="resume-section animate__animated animate__fadeIn" id="interests">
                <InterestData />
            </section>
            {/* <hr className="m-0" /> */}
        </div>
    </>);
};

export default Interest;