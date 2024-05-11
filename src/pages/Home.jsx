import React from "react";
import Navbar from "../components/Navbar";
import ParallexVideo from "../components/ParallexVideo";
import Info from "../components/Info";
import Work from "../components/Work";
import Company from "../components/Company";
import MySlider from "../components/MySlider";
import FunFact from "../components/FunFact";
import Client from "../components/Client";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ParallexVideo />
      <Info />
      <Work />
      <Company />
      <MySlider />
      <FunFact />
      <Client />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
