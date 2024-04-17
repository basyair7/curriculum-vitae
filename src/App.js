// import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import ProfessionalExperience from "./pages/ProfessionalExperience";
import Home from "./pages/Home";
import Interest from "./pages/Interest";
import Skills from "./pages/Skills";
import OrganizationalExperience from "./pages/OrganizationalExperience";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professionalexperience" element={<ProfessionalExperience />} />
          <Route path="/organizationalexperience" element={<OrganizationalExperience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/interests" element={<Interest />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
