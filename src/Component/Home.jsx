import React from "react";
import "../assets/Styles/Home.css";

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
              <img
                src="../src/assets/Images/10026.png"
                className="img-fluid Hero-img "
              />
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

      <div className="container">
        <div className="row cardlayout">
          <div className="col-md-6">
            <div className="card card1 shadow-lg a">
              <div className="card-title">
                <img src="../src/assets/Images/10010.svg" alt="" />
                <a href="" className="cardtitle ">
                  Digital marketing
                </a>
              </div>
              <div className="card-body">
                <p className="paratext1">
                  The words you use in your written communications speak
                  volumes. Dozens of organisations already reap the benefits of
                  having an experienced.
                </p>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="col-md-6">
            <div className="card card1 shadow-lg a">
              <div className="card-title">
                <img src="../src/assets/Images/10010.svg" alt="" />
                <a href="" className="cardtitle ">
                  Social media marketing
                </a>
              </div>
              <div className="card-body">
                <p className="paratext1">
                  The words you use in your written communications speak
                  volumes. Dozens of organisations already reap the benefits of
                  having an experienced.
                </p>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="col-md-6">
            <div className="card card1 shadow-lg a">
              <div className="card-title">
                <img src="../src/assets/Images/10010.svg" alt="" />
                <a href="" className="cardtitle ">
                  Content create
                </a>
              </div>
              <div className="card-body">
                <p className="paratext1">
                  The words you use in your written communications speak
                  volumes. Dozens of organisations already reap the benefits of
                  having an experienced.
                </p>
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className="col-md-6">
            <div className="card card1 shadow-lg a">
              <div className="card-title">
                <img src="../src/assets/Images/10010.svg" alt="" />
                <a href="" className="cardtitle ">
                  Web desing
                </a>
              </div>
              <div className="card-body">
                <p className="paratext1">
                  The words you use in your written communications speak
                  volumes. Dozens of organisations already reap the benefits of
                  having an experienced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                src="../src/assets/Images/10016.png"
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

      <section>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-4  ">
                <div className="card card2  text-center cardsection2   ">
                  <div>
                    <p id="paracard2">Basic Plan</p>
                  </div>

                  <div>
                    <h4>$700</h4>
                  </div>

                  <div>
                    <p>
                      Content marketing is nothing but offering users value.
                    </p>
                  </div>

                  <div>
                    <ul>
                      <li>Increase traffic 50%</li>
                      <li>Social Media Marketing</li>
                      <li>10 Free Optimization</li>
                      <li>24/7 support</li>
                    </ul>
                  </div>

                  <div>
                    <button className=" btn Hero-btn rounded-pill  py-3">
                      Get Started Now
                    </button>
                  </div>
                </div>
              </div>
              {/* card2 */}
              <div className="col-md-4  ">
                <div className="card card2  text-center cardsection2   ">
                  <div>
                    <p id="paracard2">Basic Plan</p>
                  </div>

                  <div>
                    <h4>$700</h4>
                  </div>

                  <div>
                    <p>
                      Content marketing is nothing but offering users value.
                    </p>
                  </div>

                  <div>
                    <ul>
                      <li>Increase traffic 50%</li>
                      <li>Social Media Marketing</li>
                      <li>10 Free Optimization</li>
                      <li>24/7 support</li>
                    </ul>
                  </div>

                  <div>
                    <button className=" btn Hero-btn rounded-pill  py-3">
                      Get Started Now
                    </button>
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className="col-md-4  ">
                <div className="card card2  text-center cardsection2   ">
                  <div>
                    <p id="paracard2">Basic Plan</p>
                  </div>

                  <div>
                    <h4>$700</h4>
                  </div>

                  <div>
                    <p>
                      Content marketing is nothing but offering users value.
                    </p>
                  </div>

                  <div>
                    <ul>
                      <li>Increase traffic 50%</li>
                      <li>Social Media Marketing</li>
                      <li>10 Free Optimization</li>
                      <li>24/7 support</li>
                    </ul>
                  </div>

                  <div>
                    <button className=" btn Hero-btn rounded-pill  py-3">
                      Get Started Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container-fluid">
        <div className="row blankspace">
          <div className="col-md-6">
            <div>
              <h2>Let's talk about your project</h2>
            </div>
            <div>
              <p>
                Content marketing is nothing but offering users value. It is not
                just about traffic minion consectetur adipiscing elitd do
                eiusmod tempor incididun.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <button className=" btn btn-light rounded-pill  py-3">
              Explore Us
            </button>
          </div>
        </div>
      </div>

      <br />
    </>
  );
};

export default Home;
