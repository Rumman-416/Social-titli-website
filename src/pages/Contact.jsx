import React from "react";
import Navbar from "../components/Navbar";
import ParallaxImage from "../components/ParallaxImage";
import ContactPgSec from "../components/ContactPgSec";
import Footer from "../components/Footer";

const Contact = () => {
  const image = "contactus";
  return (
    <div>
      <Navbar />
      <ParallaxImage image={image} />
      <ContactPgSec />
      <Footer />
    </div>
  );
};

export default Contact;
