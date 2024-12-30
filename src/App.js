import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import ProfessionalExperience from "./pages/ProfessionalExperience";
import OrganizationalExperience from "./pages/OrganizationalExperience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Interest from "./pages/Interest";
import Projects from "./pages/Projects";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [pathname, hash]);

    return null;
};

const App = () => {
    return (<>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<ProfessionalExperience />} />
                <Route path="/organization" element={<OrganizationalExperience />} />
                <Route path="/education" element={<Education />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/interests" element={<Interest />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    </>);
};

export default App;