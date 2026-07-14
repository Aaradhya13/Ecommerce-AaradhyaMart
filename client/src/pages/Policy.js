import React from "react";
import Layout from "./../components/Layout/Layout";

const policies = [
  "We collect personal information (name, email, address) when you make a purchase.",
  "Your information is used to process orders and improve our services.",
  "We do not sell or share your personal data with third parties.",
  "We implement security measures to protect your information.",
  "You can access and update your personal information anytime.",
  "We may send promotional emails if you opt-in.",
  "For questions, contact us at support@aaradhyasboutique.com.",
];

const Policy = () => {
  return (
    <Layout title="Privacy Policy - AaradhyaMart">
      <div className="info-page">
        <div className="info-page-inner">
          <div className="info-img-col">
            <img src="/images/contactus.jpeg" alt="Privacy Policy" className="info-img" />
          </div>
          <div className="info-content-col">
            <p className="info-tag">Legal</p>
            <h1 className="info-title">Privacy Policy</h1>
            <p className="info-text">
              Your privacy matters to us. Here's how we handle your data at
              Aaradhya's Timeless Boutique.
            </p>
            <ol className="policy-list">
              {policies.map((item, i) => (
                <li key={i} className="policy-item">{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
