import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import About from "./Component/About";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
