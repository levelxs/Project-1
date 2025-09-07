import React from "react";
import "../assets/Styles/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="container aboutdiv">
        <div className="row">
          <div className="col-md-6 abouthead">
            <h2>Contact Us</h2>

            <p>
              Content marketing is nothing but offering users value. It is not
              just about traffic minion customers.
            </p>
          </div>
        </div>
      </div>

      {/*  map  */}
      <div className="container">
        <div className="row">
          <div className="mb-5">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609860465!2d72.7410977!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c0498c4e5%3A0xdea63a64a6b7403b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1662690573649!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* input */}
      <div className="container">
        <div className="row">
          <div className="">
            <h2 className="text-start mb-4 getintouch">Get in Touch</h2>
          </div>
          <div className="col-md-7">
            {/* Get in Touch Section */}

            {/* heading */}

            {/* imput message */}
            <div className="mb-3 font">
              <label className="form-label"></label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter message"
                id="input1"
              ></textarea>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 font">
                  <label className="form-label "></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                {/*  */}
                <div className="mb-3 col-md-6 font">
                  <label className="form-label"></label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                {/* Enter subject */}

                <div className="mb-3 col-md-12 font">
                  <label className="form-label"></label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter subject"
                  />
                </div>
              </div>
            </div>

            <div className="text-start">
              <button type="submit" className="Sendbtn btn btn-outline">
                SEND
              </button>
            </div>
          </div>

          <div className="col-md-5 text-end addresslayout">
            <div>
              <h1 className="addresstext">Buttonwood, California.</h1>
              <p className="addresspara">Rosemead, CA 91770</p>
            </div>

            <div>
              <h1 className="addresstext">+1 253 565 2365</h1>
              <p className="addresspara">Mon to Fri 9am to 6pm</p>
            </div>

            <div>
              <h1 className="addresstext">support@colorlib.com</h1>
              <p className="addresspara">Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </>
  );
};

export default Contact;
