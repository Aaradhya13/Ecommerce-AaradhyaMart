import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>We collect personal information (name, email, address) when you make a purchase.</p>
          <p>Your information is used to process orders and improve our services.</p>
          <p>We do not sell or share your personal data with third parties.</p>
          <p>We implement security measures to protect your information.</p>
          <p>You can access and update your personal information anytime.</p>
          <p>We may send promotional emails if you opt-in.</p>
          <p>For questions, contact us at support@aaradhyasboutique.com.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;