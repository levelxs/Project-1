import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import About from "./Component/About";
import "./App.css";
import Services from "./Component/Services";
import Contact from "./Component/Contact";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
