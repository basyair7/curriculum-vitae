import React from "react";

const EducationData = () => {
    return (<>
        <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">    
                    <h3 className="mb-0">Syiah Kuala University</h3>
                    <div className="subheading mb-3">Bachelor of Electrical Engineering</div>
                    <div>Electrical Power Engineering</div>
                    <p>GPA: 3.41 out of 4.00</p>
                </div>
                <div className="flex-shrink-0">
                    <span className="text-primary">August 2019 - November 2023</span>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                    <h3 className="mb-0">SMAN 5 Banda Aceh</h3>
                    <div className="subheading mb-3">Natural Science Program (Physics)</div>
                    <p>GPA: AB</p>
                </div>
                <div className="flex-shrink-0">
                    <span className="text-primary">July 2016 - May 2019</span>
                </div>
            </div>
        </div>
    </>);
};

export default EducationData;