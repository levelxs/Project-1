import React from "react";
import "../assets/Styles/About.css";
import Blue_bg from "./Blue_bg";

const About = () => {
  return (
    <>
      <div className="container aboutdiv">
        <div className="row">
          <div className="col-md-6 abouthead">
            <h2>About Us</h2>

            <p>
              Content marketing is nothing but offering users value. It is not
              just about traffic minion customers.
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 id="subtext">
              Trusted by over 3,000 world’s leading companies
            </h2>
            <p id="subpara">
              Content marketing is nothing but offering users value. It is not
              just about traffic minion <br />
              consectetur adipiscing elitd do eiusmod tempor incididun.
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* Rocket Section */}
      <div className="container">
        <div className="row Rocket-Section">
          <div className="col-md-6 ">
            <img src="../src/assets/Images/10018.png" alt="" />
          </div>

          <div className="col-md-5 Rocket-img ">
            <h2>We take a steps to build a successful business</h2>
            <br />
            <p>
              Content marketing is nothing but offering users value. It is not
              just about traffic minion consectetur adipiscing elitd do eiusmod
              tempor incididun.
            </p>

            <button className=" btn Hero-btn rounded-pill  py-3">
              Explore Us
            </button>
          </div>
        </div>
      </div>

      {/* Search section */}
      <br />
      <br />
      <section>
        <div className="container">
          <div className="row Rocket-Section">
            <div className="col-md-6 Rocket-img ">
              <h2>We are here to help you for better solutions</h2>
              <br />
              <p>
                Content marketing is nothing but offering users value. It is not
                just about traffic minion consectetur adipiscing elitd do
                eiusmod tempor incididun.
              </p>
              <br />
              <button className=" btn Hero-btn rounded-pill  py-3">
                Explore Us
              </button>
            </div>
            {/* img */}
            <div className="col-md-6 ">
              <img
                src="../src/assets/Images/10016.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* blueback ground text */}
      <Blue_bg />
      <br />
      <br />
    </>
  );
};

export default About;
