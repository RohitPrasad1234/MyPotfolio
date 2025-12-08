import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// Admin Pages
import Dashboard from "./backend/Dashboard";
import AboutAdmin from "./backend/AboutAdmin";
import ExperienceAdmin from "./backend/ExperienceAdmin";
import SkillAdmin from "./backend/SkillAdmin";
import ServiceAdmin from "./backend/ServiceAdmin";
import ProjectAdmin from "./backend/ProjectAdmin";
function App() {
  return (
    <Router>
      <Routes>
        
        {/* FRONT PAGE */}
        <Route path="/" element={<Home />} />

        {/* ADMIN ROUTES */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/about" element={<AboutAdmin />} />

        <Route path="/dashboard/experience" element={<ExperienceAdmin />} />
      <Route path="/dashboard/skill" element={<SkillAdmin/>}></Route>
        <Route path="/dashboard/expertise" element={<ServiceAdmin/>}></Route>
        <Route path="/dashboard/work" element={<ProjectAdmin/>}></Route>
        {/* Add others later */}
        {/* <Route path="/dashboard/experience" element={<ExperienceAdmin />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
