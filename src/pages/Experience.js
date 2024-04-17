import React from "react";
import Header from "../components/Header";

const Experience = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
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

      </div>
    </>
  );
};

export default Experience;
