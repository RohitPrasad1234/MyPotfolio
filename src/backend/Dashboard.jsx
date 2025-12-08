import React from "react";
import AdminLayout from "./components/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
      <p className="mt-4 text-gray-700">Select any section from the sidebar.</p>
    </AdminLayout>
  );
};

export default Dashboard;
