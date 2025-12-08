import React from "react";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <AdminSidebar />

      {/* Page Content */}
      <div className="flex-1 ml-64 p-10">
        {children}
      </div>

    </div>
  );
};

export default AdminLayout;
