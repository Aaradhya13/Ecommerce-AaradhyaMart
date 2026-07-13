import React from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import "../../styles/UserDashboardStyles.css";

const Orders = () => {
  return (
    <Layout title={"Your Orders"}>
      <div className="container dashboard-page">
        <div className="row dashboard-shell">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="orders-card">
              <h2>All Orders</h2>
              <p className="orders-empty">Your order history will appear here.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
