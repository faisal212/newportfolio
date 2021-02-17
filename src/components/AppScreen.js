import React,{useEffect} from "react";
import { Container, Row } from "react-bootstrap";
import SwiperCore, { Pagination } from "swiper";
import Swiper from "react-id-swiper";
import BlockTitle from "./BlockTitle";

import Img from "gatsby-image"

const AppScreen = ({appScreens}) => {
  useEffect(() => {
  
    SwiperCore.use([Pagination]);

  },[] )
  const params = {
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, 
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "true",
    },
    slidesPerView: 5,
    rebuildOnUpdate: true,
    freeMode: true,
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      767: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
      991: {
        slidesPerGroup: 2,
        slidesPerView: 3,
      },
      1499: {
        slidesPerGroup: 5,
        slidesPerView: 5,
      },
    },
  };
  return (
    <section className="app-shot-one" id="screens">
      <Container fluid>
        <BlockTitle
          textAlign="center"
          paraText="Application Screenshots"
          titleText={`Checkout Our Application \n Interface Look`}
        />
        <div className="app-shot-one__carousel">
          <Swiper {...params}>
            {
              appScreens.edges.map(({node}) =>(
                <div className="item" key={node.id}>
                <Img fluid={node.childImageSharp.fluid} className="screens" alt="Awesome Image" />
              </div>
              ))
            }
           
            
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default AppScreen;
