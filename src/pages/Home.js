import React from "react";
import Header from "../components/Header";
import "animate.css";

const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section animate__animated animate__fadeInDown" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Fathul
              <span class="text-primary"> Basyair</span>
            </h1>
            <div class="subheading mb-5">
              Desa Miruk · Ulee Kareng, Banda Aceh
              {/* <a href="mailto:basyair.fathul@email.com">basyair.fathul@email.com</a> */}
            </div>
            <p class="lead mb-5">
            I am an Electrical Engineering graduate from Syiah Kuala University, specializing in Power System Engineering. 
            I have a deep interest in designing systems on distribution networks with the internet of things as well as using fuzzy logic methods. 
            I have a good understanding of power distribution, transmission, and electrical equipment. 
            I also have IT skills such as understanding C++, Python, and JavaScript programming. 
            I am very enthusiastic to contribute to the development of an efficient and more modern power system.
            </p>
            <div class="social-icons">
              <a class="social-icon" href="https://www.linkedin.com/in/fathul-basyair07/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/basyair7">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="https://x.com/basyair07">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="social-icon" href="https://facebook.com/basyair.fathul07">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Laboratory Asistant</h3>
                <div class="subheading mb-3">
                  Electric Motor · System Generator · C (Programming Languages) · Solar PV · PLTS · Renewable Energy
                </div>
                <p>
                  
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2021 - Present</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Research Asistant</h3>
                <div class="subheading mb-3">
                  Microcontroller · Python (Programming Languages) · Arduino · Microsoft Office
                </div>
                <p>
                  
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">July 2021 - October 2021</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Robotics Electrical Engineering Community (KROENG USK)</h3>
                <div class="subheading mb-3">Leader</div>
                <p>
                  Leader of Robotics Electrical Engineering Community Syiah Kuala University for the period 2022
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">February 2022 - April 2023</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Recovery Switchgear Medium Voltage Intern</h3>
                <div class="subheading mb-3">Recovery Switchgear</div>
                <p>
                  Maintenance of switchgear at substations owned by PT.PLN (Persero) UP2D Aceh
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">February 2022 - Juni 2022</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Syiah Kuala University</h3>
                <div class="subheading mb-3">Bachelor of Electrical Engineering</div>
                <div>Electric Power Engineering</div>
                <p>GPA: 3.41 out of 4.00</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2019 - September 2023</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">SMAN 5 Banda Aceh</h3>
                <div class="subheading mb-3">Natural Science Program (Physics)</div>
                <p>GPA: A</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">July 2016 - May 2019</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev-icons">
              {/* Arduino */}
              <li class="list-inline-item">
                <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg"
                    alt="arduino"
                    width="40"
                    height="40"
                  />
                </a>
              </li>
              {/* Bootstrap */}
              <li class="list-inline-item">
                <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                    alt="bootstrap"
                    width="40"
                    height="40"
                  />
                </a>
              </li>
              {/* C */}
              <li class="list-inline-item">
                <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                    alt="c"
                    width="40"
                    height="40"
                  />
                </a>
              </li>
              {/* C++ */}
              <li class="list-inline-item">
                <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                    alt="cplusplus"
                    width="40"
                    height="40"
                  />
                </a>
              </li>
              {/* Bootstrap */}
              <li class="list-inline-item">
                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                    width="40"
                    height="40"
                  />
                </a>
              </li>
              {/* Firebase */}
              <li class="list-inline-item">
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
              <li class="list-inline-item">
                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    width="40"
                    height="40"
                  />
                </a>
              </li>
              {/* JavaScripts */}
              <li class="list-inline-item">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="40"
                    height="40"
                  />
                </a>
              </li>
              {/* Typescripts */}
              <li class="list-inline-item">
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                    alt="typescript"
                    width="40"
                    height="40"
                  />
                </a>
              </li>
              {/* Linux */}
              <li class="list-inline-item">
                <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                    alt="linux"
                    width="40"
                    height="40"
                  />
                </a>
              </li>
              {/* Matlab */}
              <li class="list-inline-item">
                <a href="https://www.mathworks.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
                    alt="matlab"
                    width="40"
                    height="40"
                  />
                </a>
              </li>
              {/* NodeJS */}
              <li class="list-inline-item">
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  <i class="fab fa-node-js"></i>
                </a>
              </li>
              {/* Python */}
              <li class="list-inline-item">
                <a href="https://www.python.org" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                    alt="python"
                    width="40"
                    height="40"
                  />
                </a>
              </li>
              {/* PHP */}
              <li class="list-inline-item">
                <a href="https://www.php.net" target="_blank" rel="noreferrer">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                    alt="php"
                    width="40"
                    height="40"
                  />
                </a>
              </li>
              {/* SQLite */}
              <li class="list-inline-item">
                <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer">
                  <img
                    src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
                    alt="sqlite"
                    width="40"
                    height="40"
                  />
                </a>
              </li>
            </ul>
            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Internet of Things, System Embedded, Microcontroller (ESP / Atmega)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Electric Power Transmission and Distribution
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Renewable Energy
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Solar PV System
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p>
              Apart from my expertise in the electrical field, 
              I also have a hobby of playing games, playing music, 
              watching anime, and also creating programming projects.
            </p>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="projects">
          <div class="resume-section-content">
            <h2 class="mb-5">Projects</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-diagram-project text-warning"></i>
                </span>
                
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-diagram-project text-warning"></i>
                </span>
                <a class="btn btn-primary" href="https://himatektrousk.eu.org" target="-blank">Website Himpunan Teknik Elektro USK (Electrical Engineering Student Association Website)</a>
              </li> 
              <br />
              
              <li>
                <span class="fa-li">
                  <i class="fas fa-diagram-project text-warning"></i>
                </span>
                <a class="btn btn-primary" href="https://kroengusk.eu.org" target="-blank">Website Komunitas Robotika Teknik Elektro USK (KROENG USK)</a>
              </li> 
              <br />

              <li>
                <span class="fa-li">
                  <i class="fas fa-diagram-project text-warning"></i>
                </span>
                <a class="btn btn-primary" href="https://github.com/basyair7/eed-project" target="-blank">AWP (Automatic Watering Plants) Projects</a>
              </li> <br />

              <li>
                <span class="fa-li">
                  <i class="fas fa-diagram-project text-warning"></i>
                </span>
                <a class="btn btn-primary" href="https://github.com/basyair7/tempcubiclepi" target="-blank">TempCubiclePi (Temperature Cubicle Pi)</a>
              </li> <br />
              
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
