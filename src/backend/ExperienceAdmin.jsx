import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "./components/AdminLayout";

const ExperienceAdmin = () => {
  const [work, setWork] = useState([]);
  const [education, setEducation] = useState([]);

  // Load existing data
  useEffect(() => {
    axios.get("http://localhost:5000/api/experience")
      .then(res => {
        setWork(res.data.filter(item => item.section === "work"));
        setEducation(res.data.filter(item => item.section === "education"));
      })
      .catch(err => console.log(err));
  }, []);

  // Handle change in fields
  const handleChange = (section, index, field, value) => {
    if (section === "work") {
      const updated = [...work];
      updated[index][field] = value;
      setWork(updated);
    } else {
      const updated = [...education];
      updated[index][field] = value;
      setEducation(updated);
    }
  };

  // Add new row
  const addRow = (section) => {
    const newEntry = { year: "", company: "", role: "", desc: "", section };
    if (section === "work") setWork([...work, newEntry]);
    else setEducation([...education, newEntry]);
  };

  // Save to MongoDB
  const handleSubmit = () => {
    const data = [...work, ...education];
    axios
      .post("http://localhost:5000/api/experience", data)
      .then(() => alert("Experience saved successfully!"))
      .catch(err => console.log(err));
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Manage Experience</h1>

      {/* WORK SECTION */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-3">Work Experience</h2>

        {work.map((item, index) => (
          <div key={index} className="border p-5 mb-4 rounded bg-white shadow">
            <input
              className="w-full border p-2 mb-2"
              placeholder="Year (e.g. June 2025 — Present)"
              value={item.year}
              onChange={(e) => handleChange("work", index, "year", e.target.value)}
            />
            <input
              className="w-full border p-2 mb-2"
              placeholder="Company Name"
              value={item.company}
              onChange={(e) => handleChange("work", index, "company", e.target.value)}
            />
            <input
              className="w-full border p-2 mb-2"
              placeholder="Role (e.g. Laravel Developer)"
              value={item.role}
              onChange={(e) => handleChange("work", index, "role", e.target.value)}
            />
            <textarea
              className="w-full border p-2"
              placeholder="Description"
              value={item.desc}
              onChange={(e) => handleChange("work", index, "desc", e.target.value)}
            ></textarea>
          </div>
        ))}

        <button
          onClick={() => addRow("work")}
          className="bg-black text-white px-4 py-2 rounded"
        >
          + Add Work Experience
        </button>
      </div>

      {/* EDUCATION SECTION */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-3">Education</h2>

        {education.map((item, index) => (
          <div key={index} className="border p-5 mb-4 rounded bg-white shadow">
            <input
              className="w-full border p-2 mb-2"
              placeholder="Year"
              value={item.year}
              onChange={(e) => handleChange("education", index, "year", e.target.value)}
            />
            <input
              className="w-full border p-2 mb-2"
              placeholder="Institute / University"
              value={item.company}
              onChange={(e) => handleChange("education", index, "company", e.target.value)}
            />
            <input
              className="w-full border p-2 mb-2"
              placeholder="Degree"
              value={item.role}
              onChange={(e) => handleChange("education", index, "role", e.target.value)}
            />
            <textarea
              className="w-full border p-2"
              placeholder="Description"
              value={item.desc}
              onChange={(e) => handleChange("education", index, "desc", e.target.value)}
            ></textarea>
          </div>
        ))}

        <button
          onClick={() => addRow("education")}
          className="bg-black text-white px-4 py-2 rounded"
        >
          + Add Education
        </button>
      </div>

      {/* SAVE BUTTON */}
      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-6 py-3 rounded text-lg"
      >
        SAVE EXPERIENCE
      </button>
    </AdminLayout>
  );
};

export default ExperienceAdmin;
