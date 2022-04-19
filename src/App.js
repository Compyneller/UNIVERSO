import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home";
import "./App.scss";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
