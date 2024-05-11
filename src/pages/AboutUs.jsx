import React from "react";
import Navbar from "../components/Navbar";
import ParallaxImage from "../components/ParallaxImage";
import AboutCompany from "../components/AboutComapny";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const AboutUs = () => {
  const image = "aboutus";
  return (
    <div>
      <Navbar />
      <ParallaxImage image={image} />
      <AboutCompany />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default AboutUs;
