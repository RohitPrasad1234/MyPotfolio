import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./components/AdminLayout";

const SkillAdmin = () => {
  const [form, setForm] = useState({
    title: "",
    skills: [""], // array of skill inputs
  });

  const [loading, setLoading] = useState(true);

  // Load saved skills from backend
  useEffect(() => {
    axios
      .get("https://mybackend-1mw6.onrender.com/api/skill")
      .then((res) => {
        if (res.data) {
          setForm(res.data);
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // Handle title change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle skill array input change
  const handleSkillChange = (index, value) => {
    const updated = [...form.skills];
    updated[index] = value;
    setForm({ ...form, skills: updated });
  };

  // Add new skill input
  const addSkillField = () => {
    setForm({ ...form, skills: [...form.skills, ""] });
  };

  // Remove a skill input
  const removeSkillField = (index) => {
    const updated = [...form.skills];
    updated.splice(index, 1);
    setForm({ ...form, skills: updated });
  };

  // Submit data to backend
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/skill", form)
      .then(() => alert("Skills saved successfully!"))
      .catch((err) => console.log(err));
  };

  if (loading)
    return (
      <AdminLayout>
        <p>Loading...</p>
      </AdminLayout>
    );

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Manage Skills Section</h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* TITLE */}
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Skill Section Title"
          className="w-full border p-3 rounded"
        />

        {/* SKILLS ARRAY */}
        <div className="space-y-3">
          <label className="text-lg font-semibold">Skills List</label>

          {form.skills.map((skill, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                placeholder={`Skill #${index + 1}`}
                className="w-full border p-3 rounded"
              />

              {/* REMOVE BUTTON */}
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeSkillField(index)}
                  className="bg-red-600 text-white px-3 rounded"
                >
                  X
                </button>
              )}
            </div>
          ))}

          {/* ADD SKILL BUTTON */}
          <button
            type="button"
            onClick={addSkillField}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            + Add Skill
          </button>
        </div>

        {/* SAVE BUTTON */}
        <button
          type="submit"
          className="bg-black text-white py-3 px-6 rounded hover:bg-red-700"
        >
          Save
        </button>
      </form>
    </AdminLayout>
  );
};

export default SkillAdmin;
