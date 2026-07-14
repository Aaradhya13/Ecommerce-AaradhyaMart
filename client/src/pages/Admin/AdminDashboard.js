import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import { MdPerson, MdEmail, MdPhone } from "react-icons/md";
import "../../styles/AdminStyles.css";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title="Admin Dashboard">
      <div className="admin-layout">
        <AdminMenu />
        <div className="admin-content">
          <h2 className="admin-page-title">Dashboard</h2>
          <div className="admin-info-grid">
            <div className="admin-info-card">
              <div className="admin-info-icon purple"><MdPerson /></div>
              <div>
                <div className="admin-info-label">Admin Name</div>
                <div className="admin-info-value">{auth?.user?.name}</div>
              </div>
            </div>
            <div className="admin-info-card">
              <div className="admin-info-icon blue"><MdEmail /></div>
              <div>
                <div className="admin-info-label">Email</div>
                <div className="admin-info-value">{auth?.user?.email}</div>
              </div>
            </div>
            <div className="admin-info-card">
              <div className="admin-info-icon green"><MdPhone /></div>
              <div>
                <div className="admin-info-label">Contact</div>
                <div className="admin-info-value">{auth?.user?.phone}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
