import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title="About Us - AaradhyaMart">
      <div className="info-page">
        <div className="info-page-inner">
          <div className="info-img-col">
            <img src="/images/about.jpeg" alt="About us" className="info-img" />
          </div>
          <div className="info-content-col">
            <p className="info-tag">Our Story</p>
            <h1 className="info-title">Where Style Meets Sophistication</h1>
            <p className="info-text">
              Welcome to Aaradhya's Timeless Boutique — dedicated to providing an
              exquisite selection of timepieces and accessories designed to enhance
              your everyday life.
            </p>
            <p className="info-text">
              We offer a diverse range of products, from cutting-edge smartwatches
              to elegant wall clocks and chic accessories for both men and women.
              Our mission is to blend functionality with aesthetics, creating pieces
              that not only tell time but also tell your story.
            </p>
            <p className="info-text">
              Our user-friendly platform lets you explore our collections
              effortlessly, while our responsive customer service team is always
              ready to assist you. Discover the perfect addition to your wardrobe or
              home, and let us be part of your journey toward timeless elegance.
            </p>
            <div className="info-stats">
              <div className="info-stat">
                <span className="info-stat-num">500+</span>
                <span className="info-stat-label">Products</span>
              </div>
              <div className="info-stat">
                <span className="info-stat-num">10k+</span>
                <span className="info-stat-label">Happy Customers</span>
              </div>
              <div className="info-stat">
                <span className="info-stat-num">24/7</span>
                <span className="info-stat-label">Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
