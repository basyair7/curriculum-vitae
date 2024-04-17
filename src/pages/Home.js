import React from "react";
import Header from "../components/Header";
import { Analytics } from "@vercel/analytics/react";
import "animate.css";

const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <Analytics />
        <section class="resume-section animate__animated animate__fadeInDown" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Fathul
              <span class="text-primary"> Basyair</span>
            </h1>
            <div class="subheading mb-5">
              Tanjong · Ingin Jaya, Aceh Besar
              {/* <a href="mailto:@email.com">@email.com</a> */}
            </div>
            <p class="lead mb-5">
            I am a Syiah Kuala University Electrical Engineering graduate with a focus on Electrical Power System Engineering. I am particularly interested in creating systems for distribution networks using the internet of things and fuzzy logic methods. 
            I am expert in power distribution, transmission, and electrical equipment. I also have IT talents, such as programming in C++, Python, and JavaScript. 
            I am really excited to contribute to the advancement of a more efficient and contemporary electricity grid.
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

        <section class="resume-section" id="professionalexperience">
          <div class="resume-section-content">
            <h2 class="mb-5">Professional Experience</h2>
            
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h4 class="mb-0">Project Manager Asistant, Design of Temperature and Humidity Control System at 20 kV Distribution Substation Cubicle With Fuzzy Logic Method - MBKM USK Unggul</h4>
                <div class="lead mb-8">
                  <b>·</b> Collaborated with PT PLN (Persero) UP2D Aceh to enchance the efficiency and relability of 20 kV switchgear using fuzzy logic <br />
                  <b>·</b> Successfully developed a novel control system to keep the humidity of 20 kV switchgear in electricity distribution Substation below 80% which may save up to 45% of electric power savings once switchgear heaters are used.
                </div>
                <p></p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Feb 2023 - Sep 2023(6 months)</span>
              </div>
            </div>
            
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h4 class="mb-0">Chairman, Automatic Watering Plant - Student Organization Capacity Building Program (PPK Ormawa) 2022, DIKTI.</h4>
                <div class="lead mb-8">
                  <b>·</b> Create a watering system for chili plants that is connected with renewable energy sources and the Internet of Things. <br />
                  <b>·</b> It can water itself and be managed remotely via a webpage. <br />
                  <b>·</b> As a leader, I coordinated the team and designed the prototype concept. <br />
                </div>
                <p></p>
              </div>

              <div class="flex-shrink-0">
                <span class="text-primary">Aug 2022 - Dec 2022 (4 months)</span>
              </div>
            </div>
            
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h4 class="mb-0">Recovery Switchgear Medium Voltage Intern</h4>
                <div class="subheading mb-2">Recovery Switchgear</div>
                <div class="lead mb-8">
                  <b>·</b> Working together and inspecting the conditions of 20 kV switchgear at distribution substations in Aceh, such as checking for corona and cleaning.<br />
                  <b>·</b> One of the Engineer teams working in the substation's repair and restoration of 20 kV switchgear. <br />
                </div>
                <p><br /></p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Feb 2022 - Jul 2022 (6 months)</span>
              </div>
            </div>

            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h4 class="mb-0">Laboratory Asistant, Electrical Power System Laboratory</h4>
                <div class="lead mb-8">
                  <b>·</b> Helper teach students how to use high voltage lab equipment.<br />
                  <b>·</b> Helper teach students how to install electrical installations for 1-story and 2-story houses.<br />
                  <b>·</b> Working together in a team to develop renewable electrical energy from solar power systems.<br />
                </div>
                <p></p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Aug 2021 - Nov 2023 (2 years and 3 months)</span>
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
                <span class="text-primary">August 2019 - November 2023</span>
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
