import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title="Contact Us - AaradhyaMart">
      <div className="info-page">
        <div className="info-page-inner">
          <div className="info-img-col">
            <img src="/images/contactus.jpeg" alt="Contact us" className="info-img" />
          </div>
          <div className="info-content-col">
            <p className="info-tag">Get In Touch</p>
            <h1 className="info-title">We're Here to Help</h1>
            <p className="info-text">
              Have any queries or need information about our products? Feel free to
              reach out anytime. We are available 24/7 to assist you!
            </p>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icon"><BiMailSend /></div>
                <div>
                  <div className="contact-card-label">Email Us</div>
                  <div className="contact-card-value">support@aaradhyasboutique.com</div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon"><BiPhoneCall /></div>
                <div>
                  <div className="contact-card-label">Call Us</div>
                  <div className="contact-card-value">+91-3456789363</div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon"><BiSupport /></div>
                <div>
                  <div className="contact-card-label">Toll Free</div>
                  <div className="contact-card-value">1800-0000-0000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
