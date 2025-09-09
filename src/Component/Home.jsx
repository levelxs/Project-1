import React from "react";
import "../assets/Styles/Home.css";
import Banner from "../assets/Images/10026.png"
import Rocket from "../assets/Images/10018.png";
import Search from "../assets/Images/10016.png";
import Card_1 from "./card_1";
import Card_2 from "./Card_2";
import Blue_bg from "./Blue_bg";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row Hero-banner">
          <div className="col-md-7">
            <h1 className="Hero-Heading">
              Build audience and <br />
              grow your brand
            </h1>
            <br />
            <p>
              Content marketing is nothing but offering users value. <br /> It
              is not just about traffic minion customers.
            </p>
            <br />
            <button className=" btn Hero-btn rounded-pill  py-3">
              Explore Us
            </button>
            <div className="">
              <img src={Banner} className="img-fluid Hero-img " />
            </div>
          </div>
        </div>
      </div>
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
      <br />
      <br />
      <br />
      {/* Rocket Section */}
      <div className="container">
        <div className="row Rocket-Section">
          <div className="col-md-6 ">
            <img src={Rocket} alt="" />
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

      <div className="container subtext2 ">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>How we can help</h2>
          </div>
          <div>
            <p className="text-center">
              Content marketing is nothing but offering users value. It is not
              just about traffic minion <br /> consectetur adipiscing elitd do
              eiusmod tempor incididun.
            </p>
          </div>
        </div>
      </div>
      <br />
      {/* card section */}

      <Card_1/>

      {/* blank gap */}
      <div style={{ height: "200px" }}></div>
      {/* Search img section */}
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
                src={Search}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* text section 2 */}
      <section>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 text-center subtext2">
              <h2>Affordable pricing plan</h2>
              <p id="subpara">
                Content marketing is nothing but offering users value. It is not
                just about traffic minion <br />
                consectetur adipiscing elitd do eiusmod tempor incididun.
              </p>
            </div>
          </div>
        </div>
      </section>

      <br />
      {/* card section 2 */}

      <Card_2/>

      <br />
      <br />
      <br />
      <br />
      <br />

      <Blue_bg/>

      <br />
    </>
  );
};

export default Home;
