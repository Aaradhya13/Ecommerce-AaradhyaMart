import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdCategory, MdAddBox, MdInventory, MdPeople } from "react-icons/md";
import "../../styles/AdminStyles.css";

const AdminMenu = () => {
  return (
    <div className="admin-sidebar">
      <div className="admin-sidebar-card">
        <div className="admin-sidebar-title">Admin Panel</div>
        <NavLink to="/dashboard/admin" end className="admin-nav-link">
          <MdDashboard /> Dashboard
        </NavLink>
        <NavLink to="/dashboard/admin/create-category" className="admin-nav-link">
          <MdCategory /> Create Category
        </NavLink>
        <NavLink to="/dashboard/admin/create-product" className="admin-nav-link">
          <MdAddBox /> Create Product
        </NavLink>
        <NavLink to="/dashboard/admin/products" className="admin-nav-link">
          <MdInventory /> Products
        </NavLink>
        <NavLink to="/dashboard/admin/users" className="admin-nav-link">
          <MdPeople /> Users
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
