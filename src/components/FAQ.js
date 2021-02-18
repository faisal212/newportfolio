import React from "react";
import { Container } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import AccordionItem from "./AccordionItem";
import faqBG from "../assets/images/shapes/faq-bg-1-1.png";

const FAQ = (props) => {
  return (
    <section className="faq-one">
      <img src={faqBG} className="faq-one__bg-shape-1" alt="" />
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Frequently Asked Questions"
          titleText={`Want to Ask Something \n From Appton?`}
        />
        <div className="accrodion-grp faq-accrodion">
          <AccordionItem
            title="Does volatile commerce Allow To Manage Product Variants?"
            content="Yes volatile commerce Allow you to manage the products variants and inventory."
            status={false}
          />
          <AccordionItem
            title="What will be the hosting charges?"
            content="We use Digital occean Vps for hosting and it cost 18 dollars per month upto 150 products , It will cost more according to your ammount of products."
            status={true}
          />
          <AccordionItem
            title="Does volatile commerce also have native apps?"
            content="volatile commerce is an pure web app but it can be downnload as an ios and android app through browser, we can also submit in on playstore and we challange our web app is faster than native apps also"
            status={false}
          />


        </div>
      </Container>
    </section>
  );
};

export default FAQ;
