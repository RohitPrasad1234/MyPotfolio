import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./components/AdminLayout";

const ProjectAdmin = () => {
  const [projects, setProjects] = useState([
    { title: "", subtitle: "", desc: "", image: "" }
  ]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/project")
      .then(res => {
        if (res.data.length) setProjects(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleChange = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const addProject = () => {
    setProjects([...projects, { title: "", subtitle: "", desc: "", image: "" }]);
  };

  const removeProject = (index) => {
    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/project", projects)
      .then(() => alert("Projects saved successfully!"))
      .catch(err => console.log(err));
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Manage Projects</h1>

      <form onSubmit={handleSubmit} className="space-y-8">

        {projects.map((p, index) => (
          <div key={index} className="border p-5 rounded bg-white shadow-md">

            <input
              type="text"
              placeholder="Project Title"
              value={p.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
              className="w-full border p-2 mb-3 rounded"
            />

            <input
              type="text"
              placeholder="Subtitle"
              value={p.subtitle}
              onChange={(e) => handleChange(index, "subtitle", e.target.value)}
              className="w-full border p-2 mb-3 rounded"
            />

            <textarea
              placeholder="Description"
              value={p.desc}
              onChange={(e) => handleChange(index, "desc", e.target.value)}
              className="w-full border p-2 mb-3 rounded"
            ></textarea>

            <input
              type="text"
              placeholder="Image URL"
              value={p.image}
              onChange={(e) => handleChange(index, "image", e.target.value)}
              className="w-full border p-2 mb-3 rounded"
            />

            {index > 0 && (
              <button
                type="button"
                onClick={() => removeProject(index)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addProject}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Project
        </button>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded"
        >
          Save Projects
        </button>

      </form>
    </AdminLayout>
  );
};

export default ProjectAdmin;
