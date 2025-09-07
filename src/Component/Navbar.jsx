import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../assets/Styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Navbar code from gpt help modify by me */}

      <nav className="navbar navbar-expand-lg  px-3">
        <a className="navbar-img mt-4" href="#">
          <img
            src="../src/assets/logo.png.webp"
            alt=""
            className="img-fluid me-4"
          />
        </a>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse textcolor Navbaritems">
          <div>
            <ul className="navbar-nav me-auto ms-auto fw-bold">
              <li className="nav-item me-4">
                <NavLink to="/" className="nav-link textcolor Effect">
                  Home
                </NavLink>
              </li>

              <li className="nav-item me-4">
                <NavLink to="About" className="nav-link textcolor Effect">
                  About
                </NavLink>
              </li>

              <li className="nav-item me-4">
                <NavLink to="/Services" className="nav-link textcolor Effect">
                  Services
                </NavLink>
              </li>

              <li className="nav-item me-4">
                <NavLink to="/Contact" className="nav-link textcolor Effect">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right Side Button */}
          <div>
            <button className="btn btn-btncolor btncolor fs-5 btn-shadow rounded-pill px-4 py-3 me-4">
              +10 (78) 738-9083
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
