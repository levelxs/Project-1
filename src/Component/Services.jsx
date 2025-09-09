import React from "react";
import Card_1 from "./card_1";
import Card_2 from "./Card_2";
import Blue_bg from "./Blue_bg";

const Services = () => {
  return (
    <>
      <div className="container aboutdiv">
        <div className="row">
          <div className="col-md-6 abouthead">
            <h2>Services</h2>

            <p>
              Content marketing is nothing but offering users value. It is not
              just about traffic minion customers.
            </p>
          </div>
        </div>
      </div>

      {/* services 2 text section */}
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
      <br />
      <br />
      <br />
      <br />

      {/* card section 1 */}
      <Card_1/>

      <br />
      <br />
      <br />
      <br />
      <br />
      {/* services text section 2 */}
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
      <br />
      <br />
      <br />
      {/* card section 2 */}

      <Card_2/>

      <br />

      <br />
      <br />
      <br />

      {/* Blue bg text */}
      <Blue_bg/>
    </>
  );
};

export default Services;
