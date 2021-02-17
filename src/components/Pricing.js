import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./BlockTitle";

const Pricing = (props) => {
  const [plan, setPlan] = useState(false);
  return (
    <section className="pricing-one" id="pricing">
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Pricing Tables"
          titleText={`Choose Pricing Plans Which \n Suits Your Needs`}
        />
  
        {plan !== true ? (
          <div id="yearly">
            <Row>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Basic Package</p>
                    <h3>$250</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Upto 100 Products</li>
                      <li>Can be download on native app</li>
                      <li>Super Fast Speed</li>
                      <li>Full access</li>
                    </ul>
                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Standard Pack</p>
                    <h3>$450</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>All Feature included in Standard Package</li>
                      <li>Inventory Management</li>
                      <li>Upto 500 Products</li>
                      <li>Full access</li>
                    </ul>
            

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Ultimate Pack</p>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Contact Us</span>
                    </a>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Your Custom layout design</li>
                      <li>Products Upto to your need</li>
                      <li>Full access</li>
                    </ul>
             
                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div id="month">
            <Row>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Basic Pack</p>
                    <h3>$20.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Standard Pack</p>
                    <h3>$40.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="pricing-one__single">
                  <div className="pricing-one__circle"></div>
                  <div className="pricing-one__inner">
                    <p>Ultimate Pack</p>
                    <h3>$49.00</h3>
                    <ul className="list-unstyled pricing-one__list">
                      <li>Extra features</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>Full access</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      <span>Choose Plan</span>
                    </a>

                    <span>No hidden charges!</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Pricing;
