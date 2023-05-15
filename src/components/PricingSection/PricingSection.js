import React, { useState } from "react";
import SectionTitle from "../Section/SectionTitle/SectionTitle";
import PricingTabs from "./PricingTabs/PricingTabs";

const PricingSection = (props) => {
  const [sectionData] = useState({
    sectionTitle: "Latest Package",
    sectionSubTitle: "Choose Your Packages",
    sectionTitleClass: "text-center mb-60",
  });
  
   
  return (
    <>
      <section className="pricing-area pt-110 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <SectionTitle
                sectionTitle={sectionData.sectionTitle}
                sectionSubTitle={sectionData.sectionSubTitle}
                sectionTitleClass={sectionData.sectionTitleClass}
              />
            </div>
          </div>
          <PricingTabs/>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="pricing-item">
                <div className="title text-center">
                  <h4>Basic Hand Wash</h4>
                </div>
                <div className="price text-center">
                  <h2>
                    <span className="sign">$</span>30
                    <span className="small-text">99</span>
                  </h2>
                </div>
                <div className="pricing-body">
                  <ul className="list">
                    <li className="check">Soft cloth wash</li>
                    <li className="check">Soft - free rinse</li>
                    <li className="check">Rain shilde</li>
                    <li className="uncheck">Hand Wash</li>
                    <li className="uncheck">Tire Dressing</li>
                    <li className="uncheck">Water - repellant</li>
                  </ul>
                </div>
                <div className="time text-center">
                  <span>
                    <i className="far fa-clock"></i>40 min
                  </span>
                </div>
                <div className="button text-center">
                  <a href="/#" className="main-btn">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="pricing-item">
                <div className="title text-center">
                  <h4>Basic Hand Wash</h4>
                </div>
                <div className="price text-center">
                  <h2>
                    <span className="sign">$</span>49
                    <span className="small-text">99</span>
                  </h2>
                </div>
                <div className="pricing-body">
                  <ul className="list">
                    <li className="check">Soft cloth wash</li>
                    <li className="check">Soft - free rinse</li>
                    <li className="check">Rain shilde</li>
                    <li className="uncheck">Hand Wash</li>
                    <li className="check">Tire Dressing</li>
                    <li className="check">Water - repellant</li>
                  </ul>
                </div>
                <div className="time text-center">
                  <span>
                    <i className="far fa-clock"></i>40 min
                  </span>
                </div>
                <div className="button text-center">
                  <a href="/#" className="main-btn">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="pricing-item">
                <div className="title text-center">
                  <h4>Basic Hand Wash</h4>
                </div>
                <div className="price text-center">
                  <h2>
                    <span className="sign">$</span>59
                    <span className="small-text">99</span>
                  </h2>
                </div>
                <div className="pricing-body">
                  <ul className="list">
                    <li className="check">Soft cloth wash</li>
                    <li className="check">Soft - free rinse</li>
                    <li className="check">Rain shilde</li>
                    <li className="uncheck">Hand Wash</li>
                    <li className="uncheck">Tire Dressing</li>
                    <li className="check">Water - repellant</li>
                  </ul>
                </div>
                <div className="time text-center">
                  <span>
                    <i className="far fa-clock"></i>60 min
                  </span>
                </div>
                <div className="button text-center">
                  <a href="/#" className="main-btn">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="pricing-item">
                <div className="title text-center">
                  <h4>Basic Hand Wash</h4>
                </div>
                <div className="price text-center">
                  <h2>
                    <span className="sign">$</span>100
                    <span className="small-text">99</span>
                  </h2>
                </div>
                <div className="pricing-body">
                  <ul className="list">
                    <li className="check">Soft cloth wash</li>
                    <li className="check">Soft - free rinse</li>
                    <li className="check">Rain shilde</li>
                    <li className="check">Hand Wash</li>
                    <li className="check">Tire Dressing</li>
                    <li className="check">Water - repellant</li>
                  </ul>
                </div>
                <div className="time text-center">
                  <span>
                    <i className="far fa-clock"></i>80 min
                  </span>
                </div>
                <div className="button text-center">
                  <a href="/#" className="main-btn">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
