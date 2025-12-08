import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-black text-white p-6 space-y-5 h-screen fixed left-0 top-0">
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

      <ul className="space-y-4 text-lg">
        <li><Link to="/dashboard/about">About</Link></li>
        <li><Link to="/dashboard/experience">Experience</Link></li>
        <li><Link to="/dashbord/skill">Skills</Link></li>
        <li><Link to="/dashboard/expertise">Expertise</Link></li>
        <li><Link to="/dashboard/work">Work</Link></li>
        {/* <li><Link to="/dashboard/contactus">Contact</Link></li> */}
      </ul>
    </div>
  );
};

export default AdminSidebar;
