import React from "react";

const SkillsData = () => {
    return (<>
        <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Programming Languages & Tools</div>
            <ul className="list-inline dev-icons">
                {/* Arduino */}
                <li className="list-inline-item">
                    <a href="https://arduino.cc/" target="_blank" rel="noreferrer">
                        <img 
                            src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg"
                            alt="arduino"
                            width="40"
                            height="40"
                        />
                    </a>
                </li>

                {/* Bootstrap */}
                <li className="list-inline-item">
                    <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
                        <img 
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                            alt="bootstrap"
                            width="40"
                            height="40"
                        />
                    </a>
                </li>

                {/* C */}
                <li className="list-inline-item">
                    <a href="https://cprogramming.com/" target="_blank" rel="noreferrer">
                        <img 
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                            alt="c-programming"
                            width="40"
                            height="40"
                        />
                    </a>
                </li>

                {/* C++ */}
                <li className="list-inline-item">
                    <a href="https://w3schools.com/cpp/" target="_blank" rel="noreferrer">
                        <img 
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                            alt="cplusplus-programming"
                            width="40"
                            height="40"
                        />
                    </a>
                </li>

                {/* CSS */}
                <li className="list-inline-item">
                    <a href="https://w3schools.com/css/" target="_blank" rel="noreferrer">
                        <img 
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                        />
                    </a>
                </li>

                {/* Firebase */}
                <li className="list-inline-item">
                    <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
                        <img 
                            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                            alt="firebase"
                            width="40"
                            height="40"
                        />
                    </a>
                </li>

                {/* HTML5 */}
                <li className="list-inline-item">
                    <a href="https://w3schools.com/html/" target="_blank" rel="noreferrer">
                        <img 
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                        />
                    </a>
                </li>

                {/* Javascript */}
                <li className="list-inline-item">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                        <img 
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                        />
                    </a>
                </li>

                {/* Typescripts */}
                <li className="list-inline-item">
                    <a href="https://typescriptlang.org/" target="_blank" rel="noreferrer">
                        <img 
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                            alt="typescript"
                            width="40"
                            height="40"
                        />
                    </a>
                </li>

                {/* Linux */}
                <li className="list-inline-item">
                    <a href="https://linux.org/" target="_blank" rel="noreferrer">
                        <img 
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                            alt="linux"
                            width="40"
                            height="40"
                        />
                    </a>
                </li>

                {/* Matlab */}
                <li className="list-inline-item">
                    <a href="https://mathworks.org/" target="_blank" rel="noreferrer">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
                            alt="matlab"
                            width="40"
                            height="40"
                        />
                    </a>
                </li>

                {/* NodeJS */}
                <li className="list-inline-item">
                    <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
                        <i className="fab fa-node-js"></i>
                    </a>
                </li>

                {/* Python */}
                <li className="list-inline-item">
                    <a href="https://python.org/" target="_blank" rel="noreferrer">
                        <img 
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                            alt="python"
                            width="40"
                            height="40"
                        />
                    </a>
                </li>

                {/* PHP */}
                <li className="list-inline-item">
                    <a href="https://php.net/" target="_blank" rel="noreferrer">
                        <img 
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                            alt="php"
                            width="40"
                            height="40"
                        />
                    </a>
                </li>

                {/* SQLite */}
                <li className="list-inline-item">
                    <a href="https://sqlite.org/" target="_blank" rel="noreferrer">
                        <img 
                            src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
                            alt="sqlite"
                            width="40"
                            height="40"
                        />
                    </a>
                </li>
            </ul>

            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
                <li>
                    <span className="fa-li">
                        <i className="fas fa-check"></i>
                    </span>
                    Internet of Things, Embedded System, Microcontroller (ESP, AVR/Atmega)
                </li>
                <li>
                    <span className="fa-li">
                        <i className="fa fa-check"></i>
                    </span>
                    Single Line Diagram Designer in ETAP 16.0.0
                </li>
                <li>
                    <span className="fa-li">
                        <i className="fa fa-check"></i>
                    </span>
                    Renewable Energy Engineer (Solar PV System)
                </li>
            </ul>
        </div>
    </>);
};

export default SkillsData;