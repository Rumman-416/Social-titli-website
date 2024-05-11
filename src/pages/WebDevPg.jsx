import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParallaxImage from "../components/ParallaxImage";
import WebdevContent from "../components/WebdevContent";
import ContactUs from "../components/ContactUs";

const WebDevPg = () => {
  const image = "webdev";

  return (
    <div>
      <Navbar />
      <ParallaxImage image={image} />
      <WebdevContent />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default WebDevPg;
