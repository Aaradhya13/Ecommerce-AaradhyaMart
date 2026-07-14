import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { MdPeople } from "react-icons/md";
import "../../styles/AdminStyles.css";

const Users = () => {
  return (
    <Layout title="Dashboard - All Users">
      <div className="admin-layout">
        <AdminMenu />
        <div className="admin-content">
          <h2 className="admin-page-title">All Users</h2>
          <div className="admin-panel-card">
            <div className="admin-empty">
              <MdPeople />
              <p>User management coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
