import React, { useState } from "react";


const FunFact = () => {

  return (
    <section className="funfact-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
              
                 <span>0.6s </span>
              </h3>
              <p>First Content Paint</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
              <span>0.9s </span>
              </h3>
              <p>Largest Content Paint</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
              <span>1.2s </span>
              </h3>
              <p>Time To Inractive</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="funfact-one__single">
              <h3 className="counter">
              <span>Speed Index</span>
              </h3>
              <p>1.3s</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
