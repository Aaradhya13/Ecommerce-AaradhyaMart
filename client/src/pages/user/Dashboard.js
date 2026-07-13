import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import "../../styles/UserDashboardStyles.css";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container dashboard-page">
        <div className="row dashboard-shell">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="dashboard-card">
              <h2>Account Overview</h2>
              <div className="dashboard-info">
                <div className="dashboard-info-item">
                  <span>Name</span>
                  <strong>{auth?.user?.name || "Not provided"}</strong>
                </div>
                <div className="dashboard-info-item">
                  <span>Email</span>
                  <strong>{auth?.user?.email || "Not provided"}</strong>
                </div>
                <div className="dashboard-info-item">
                  <span>Address</span>
                  <strong>{auth?.user?.address || "Not provided"}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
