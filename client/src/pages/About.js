import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Aaradhya's Timeless Boutique, where style meets sophistication! We are dedicated to providing an exquisite selection of timepieces and accessories designed to enhance your everyday life.

We offer a diverse range of products, from cutting-edge smartwatches to elegant wall clocks and chic accessories for both men and women. Our mission is to blend functionality with aesthetics, creating pieces that not only tell time but also tell your story.

We pride ourselves on delivering an exceptional shopping experience. Our user-friendly website allows you to explore our collections effortlessly, while our responsive customer service team is always ready to assist you. Discover the perfect addition to your wardrobe or home, and let us be part of your journey toward timeless elegance.




          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;