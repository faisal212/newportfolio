import React, { useState } from "react";
import BlockTitle from "./BlockTitle";
import ContactBgShape from "../assets/images/shapes/contact-bg-shape-1-1.png";
import axios from "axios";
import Img from "gatsby-image";
const Contact = ({ contactImg }) => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xrgojloe",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks You Will get our reponse soon!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <section className="contact-one" id="contact-us">
      <img src={ContactBgShape} className="contact-one__bg-shape-1" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <form onSubmit={handleOnSubmit} className="contact-form-validated contact-one__form">
              <BlockTitle
                textAlign="left"
                paraText="Contact Now"
                titleText={`Have Question? Write \n a Message`}
              />
              <div className="row">

                <div className="col-lg-6">
                  <input placeholder="email" id="email" type="email" name="email" required />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Name" name="name" required />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Phone Number" name="phone" />
                </div>
                <div className="col-lg-12">
                  <textarea
                    placeholder="Write Message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="col-lg-12 text-left">
                  <button type="submit" className="thm-btn contact-one__btn">
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="result">
              {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                  {serverState.status.msg}
                </p>
              )}
            </div>
          </div>
          <div
            className="col-lg-5 d-flex wow fadeInRight"
            data-wow-duration="1500ms"
          >
            <div className="my-auto">
              <div className="contact-one__image">
                <div>
                  <Img fluid={contactImg.childImageSharp.fluid} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
