import React from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import WebDevPg from "./pages/WebDevPg";
import Clientele from "./pages/Clientele";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/website-development" element={<WebDevPg />} />
        <Route path="/clientele" element={<Clientele />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
