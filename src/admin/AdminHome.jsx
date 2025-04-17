import React from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const AdminHome = () => {
  return (
    <div className="bg-gray-700 text-[#9e9ea4] h-screen">
      <AdminHeader />
      <AdminSidebar />
    </div>
  );
};

export default AdminHome;
