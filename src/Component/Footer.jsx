import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 footerLeft">
              <div>
                <img
                  id="footerlogo"
                  src="../src/assets/logo.png.webp"
                  className="mt-4"
                  alt=""
                />
              </div>
              <p>
                Land behold it created good saw after she'd Our set living.
                Signs midst dominion creepeth morning laboris nisi ufsit
                aliquip.
              </p>
            </div>

            <div className="col-md-2   footerNav ">
              <h4 id="footernavheading">Navigation</h4>

              <ul>
                <li className="footerli">Home</li>
                <li className="footerli">About</li>
                <li className="footerli">Services</li>
                <li className="footerli">Blog</li>
                <li className="footerli">Contact</li>
              </ul>
            </div>

            <div className="col-md-3 footerNav ">
              <h4 id="footernavheading">Services</h4>

              <ul>
                <li className="footerli">Home</li>
                <li className="footerli">About</li>
                <li className="footerli">Services</li>
                <li className="footerli">Blog</li>
                <li className="footerli">Contact</li>
              </ul>
            </div>

            <div className="col-md-3">
              <h4 id="footernavheading" className="m-4">
                Contact US
              </h4>

              <p>76/A, Green Lane, Dhanmondi, NYC</p>

              <a href="#" id="FooterNum">
                +10 (78) 738-9083
              </a>
            </div>
          </div>
        </div>

        <div>
          <p className="text-center mt-5 Copyright">
            Copyright ©2025 All rights reserved | This template is made with by
            Colorlib
          </p>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;
