import React from "react";
import Header from "../components/Header";
import "animate.css";

const Projects = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section animate__animated animate__fadeIn" id="projects">
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

export default Projects;
