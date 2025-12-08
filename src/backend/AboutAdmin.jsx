import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./components/AdminLayout";

const AboutAdmin = () => {
  const [form, setForm] = useState({
    title: "",
    description1: "",
    description2: "",
    description3: "",
    description4: ""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://mybackend-1mw6.onrender.com/api/about")
      .then(res => {
        if (res.data) setForm(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/about", form)
      .then(() => alert("About section saved successfully!"))
      .catch(err => console.log(err));
  };

  if (loading) return <AdminLayout><p>Loading...</p></AdminLayout>;

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Edit About Section</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description1"
          value={form.description1}
          onChange={handleChange}
          className="w-full border p-3 rounded h-24"
          placeholder="Description 1"
        />

        <textarea
          name="description2"
          value={form.description2}
          onChange={handleChange}
          className="w-full border p-3 rounded h-24"
          placeholder="Description 2"
        />

        <textarea
          name="description3"
          value={form.description3}
          onChange={handleChange}
          className="w-full border p-3 rounded h-24"
          placeholder="Description 3"
        />

        <textarea
          name="description4"
          value={form.description4}
          onChange={handleChange}
          className="w-full border p-3 rounded h-24"
          placeholder="Description 4"
        />

        <button className="bg-black text-white py-3 px-6 rounded hover:bg-red-700">
          Save
        </button>
      </form>
    </AdminLayout>
  );
};

export default AboutAdmin;
