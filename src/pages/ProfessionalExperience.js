import React from "react";
import Header from "../components/Header";
import "animate.css";

const ProfessionalExperience = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section animate__animated animate__fadeIn" id="professionalexperience">
          <div class="resume-section-content">
            <h2 class="mb-5">Professional Experience</h2>

            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h4 class="mb-0">Project Manager Asistant, Design of Temperature and Humidity Control System at 20 kV Distribution Substation Cubicle With Fuzzy Logic Method - MBKM USK Unggul</h4>
                <div class="lead mb-8">
                  <b>·</b> Collaborated with PT PLN (Persero) UP2D Aceh to enchance the efficiency and relability of 20 kV switchgear using fuzzy logic <br />
                  <b>·</b> Successfully developed a novel control system to keep the humidity of 20 kV switchgear in electricity distribution Substation below 80% which may save up to 45% of electric power savings once switchgear heaters are used.
                </div>
                <p>

                </p>
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
                <p>
                </p>
              </div>

              <div class="flex-shrink-0">
                <span class="text-primary">Aug 2022 - Dec 2022 (4 months)</span>
              </div>
            </div>

            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Recovery Switchgear Medium Voltage Intern</h3>
                <div class="subheading mb-3">Recovery Switchgear</div>
                <div class="lead mb-8">
                  <b>·</b> Working together and inspecting the conditions of 20 kV switchgear at distribution substations in Aceh, such as checking for corona and cleaning.<br />
                  <b>·</b> One of the Engineer teams working in the substation's repair and restoration of 20 kV switchgear.<br />
                </div>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Feb 2022 - Jul 2022 (6 months)</span>
              </div>
            </div>

            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Laboratory Asistant, Electrical Power System Laboratory</h3>
                <div class="lead mb-8">
                  <b>·</b> Helper teach students how to use high voltage lab equipment.<br />
                  <b>·</b> Helper teach students how to install electrical installations for 1-story and 2-story houses.<br />
                  <b>·</b> Working together in a team to develop renewable electrical energy from solar power systems.<br />
                </div>
              </div>

              <div class="flex-shrink-0">
                <span class="text-primary">Aug 2021 - Nov 2023 (2 years and 3 months)</span>
              </div>
            </div>

          </div>
        </section>
        <hr class="m-0" />

      </div>
    </>
  );
};

export default ProfessionalExperience;
