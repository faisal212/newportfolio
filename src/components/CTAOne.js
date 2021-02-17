import React from "react";
import BlockTitle from "./BlockTitle";

import CtaShape1 from "../assets/images/shapes/cta-1-shape-1.png";
import CtaShape2 from "../assets/images/shapes/cta-1-shape-2.png";
import GatsbyImage from "gatsby-image";

const CTAOne = ({bannerMoc2}) => {
  return (
    <section className="cta-one">
      <img src={CtaShape1} className="cta-one__bg-shape-1" alt="" />
      <img src={CtaShape2} className="cta-one__bg-shape-2" alt="" />
      <div className="container">
        <div className="cta-one__moc wow fadeInLeft" data-wow-duration="1500ms">
          <GatsbyImage style={{overflow: "visible"}} fluid={bannerMoc2.childImageSharp.fluid}   className="cta-one__moc-img" alt=""  />
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="cta-one__content">
              <BlockTitle
                textAlign="left"
                paraText="Best Application"
                titleText={`Powerful Web Application for \n Your Business`}
              />
              <div className="cta-one__text">
                <p>
                  Slow Speed Hurts Custommer,Make sure to give them good experience.
                </p>
              </div>
              <ul className="list-unstyled cta-one__list">
                <li>
                  <i className="fa fa-check-circle"></i>
                  High Scrore from all application anylytics like gtmetrix
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Best code structure to keep the surety of scalibility
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  We are using reactjs for front end , node koa.js for backend graphql api and mongodb for database
                </li>
              </ul>
              <a href="#" className="thm-btn cta-one__btn">
                <span>Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
