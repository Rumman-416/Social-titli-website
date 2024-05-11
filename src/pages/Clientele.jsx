import React from "react";
import ParallaxImage from "../components/ParallaxImage";
import Navbar from "../components/Navbar";
import AllClients from "../components/AllClients";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Clientele = () => {
  const image = "clientele";
  return (
    <div>
      <Navbar />
      <ParallaxImage image={image} />
      <AllClients />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Clientele;
