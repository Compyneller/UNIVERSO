import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OurServices from "./Pages/OurServices";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
