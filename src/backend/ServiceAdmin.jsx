import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./components/AdminLayout";

const ServiceAdmin = () => {
  const [services, setServices] = useState([
    { number: "", title: "", desc: "" }
  ]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/service")
      .then(res => setServices(res.data.length ? res.data : [{ number: "", title: "", desc: "" }]))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (index, field, value) => {
    const updated = [...services];
    updated[index][field] = value;
    setServices(updated);
  };

  const addService = () => {
    setServices([...services, { number: "", title: "", desc: "" }]);
  };

  const removeService = (index) => {
    const updated = [...services];
    updated.splice(index, 1);
    setServices(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/service", services)
      .then(() => alert("Service data saved!"))
      .catch(err => console.log(err));
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Manage Services</h1>

      <form onSubmit={handleSubmit} className="space-y-8">

        {services.map((s, index) => (
          <div key={index} className="border p-5 rounded bg-white shadow">
            
            <input
              type="text"
              placeholder="Number (01.)"
              value={s.number}
              onChange={(e) => handleChange(index, "number", e.target.value)}
              className="w-full border p-2 mb-2 rounded"
            />

            <input
              type="text"
              placeholder="Service Title"
              value={s.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
              className="w-full border p-2 mb-2 rounded"
            />

            <textarea
              placeholder="Service Description"
              value={s.desc}
              onChange={(e) => handleChange(index, "desc", e.target.value)}
              className="w-full border p-2 rounded"
            ></textarea>

            {index > 0 && (
              <button
                type="button"
                onClick={() => removeService(index)}
                className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addService}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Service
        </button>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded"
        >
          Save All
        </button>

      </form>
    </AdminLayout>
  );
};

export default ServiceAdmin;
