import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";

import Img from "gatsby-image";
const Banner = ({ bannerShape, bannerMoc }) => {
  const [open, setOpen] = useState({
    isOpen: false,
  });
  const openModal = () => {
    setOpen({
      isOpen: true,
    });
  };

  return (
    <section className="banner-one" id="home">
      <img src={BannerShape} className="banner-one__bg-shape-1" alt="" />
      <div
        className="banner-one__bg"

      >
        <Img fluid={bannerShape.childImageSharp.fluid} className="banner-one__bg" />
      </div>
      <div className="container">
        <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId="Kl5B6MBAntI"
          onClose={() => setOpen({ isOpen: false })}
        />
        <div onClick={openModal} className="banner-one__video video-popup">
          <i className="fa fa-play"></i>
        </div>
        <div className="banner-one__moc">
          <div className="wow fadeInUp"
            data-wow-duration="1500ms">
            <Img
              fluid={bannerMoc.childImageSharp.fluid}
              alt="banenr mock"
            />
          </div>

          <Img fluid={bannerShape.childImageSharp.fluid} className="banner-one__bg" />
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              <form
                className="banner-one__mc-form mc-form"
                data-url="MAILCHIMP__POPUP__FORM__URL"
              >
                <input type="text" name="email" placeholder="Email address" />
                <button type="submit" className="thm-btn banner-one__mc-btn">
                  <span>Free Trial</span>
                </button>
              </form>
              <div className="mc-form__response"></div>
              <h3>
                Challenging Fastest<br />  Ecommerce <br /> Web App
              </h3>
              <p>
                All in One Solution ,Fastest Ecommerce web app but can be
                <br /> download as window,ios and android app.
              </p>
              <a href="#" className="thm-btn banner-one__btn">
                <span>Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
