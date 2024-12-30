import React from "react";

const ProjectsData = () => {
    return (<>
        <div className="resume-section-content">
            <h2 className="mb-5">Projects</h2>
            <ul className="fa-ul mb-0">
                <li>
                    <span className="fa-li">
                        <i className="fas fa-diagram-project text-warning"></i>
                    </span>

                </li>

                <li>
                    <span className="fa-li">
                        <i className="fas fa-diagram-project text-warning"></i>
                    </span>
                    <a href="https://kroengusk.eu.org" className="btn btn-primary" target="_blank">Electrical Robotics Community USK (KROENG) Website Page</a>
                </li>
                <br />
                
                <li>
                    <span className="fa-li">
                        <i className="fas fa-diagram-project text-warning"></i>
                    </span>
                    <a href="https://github.com/basyair7/eed-project" className="btn btn-primary" target="_blank">AWP (Automatic Watering Plants) Projects</a>
                </li>
                <br />

                <li>
                    <span className="fa-li">
                        <i className="fas fa-diagram-project text-warning"></i>
                    </span>
                    <a href="https://github.com/basyair7/MicroBox-SmartFeeder-Lite" className="btn btn-primary" target="_blank">MicroBox - SmartFeeder System (Lite version)</a>
                </li>
                <br />

                <li>
                    <span className="fa-li">
                        <i className="fas fa-diagram-project text-warning"></i>
                    </span>
                    <a href="https://github.com/basyair7/tempcubiclepi" className="btn btn-primary" target="_blank">TempCubiclePi (Temperature Cubicle Pi)</a>
                </li>
                <br />

                <li>
                    <span className="fa-li">
                        <i className="fas fa-diagram-project text-warning"></i>
                    </span>
                    <a href="https://github.com/basyair7/AVRLite" className="btn btn-primary" target="_blank">AVRLite Framework</a>
                </li>
                <br />

            </ul>
        </div>
    </>);
};

export default ProjectsData;