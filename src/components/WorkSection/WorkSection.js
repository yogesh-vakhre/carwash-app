import React, { useState } from "react";
import SectionTitle from "../Section/SectionTitle/SectionTitle";

const WorkSection = (props) => {
  const [sectionData] = useState({
    sectionTitle: "Work Process",
    sectionSubTitle: "Work Process",
    sectionTitleClass: "section-white-title mb-60",
  });
  return (
    <>
      <section
        className="work-section-area pt-120 pb-90 bg_cover"
        style={{ backgroundImage: "url(assets/images/bg/work-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <SectionTitle
                sectionTitle={sectionData.sectionTitle}
                sectionSubTitle={sectionData.sectionSubTitle}
                sectionTitleClass={sectionData.sectionTitleClass}
              />
            </div>
            <div className="col-lg-6">
              <div className="button-box mb-70">
                <a href="/#" className="main-btn">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="work-item border-right mb-30">
                <div className="icon">
                  <span className="count">01</span>
                  <i className="flaticon-mechanic"></i>
                </div>
                <div className="info">
                  <h4>Contactless Washing</h4>
                  <p>
                    consectetur adipisicing eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="work-item border-right mb-30">
                <div className="icon">
                  <span className="count">02</span>
                  <i className="flaticon-car-service"></i>
                </div>
                <div className="info">
                  <h4>Safety Materials</h4>
                  <p>
                    consectetur adipisicing eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="work-item border-right mb-30">
                <div className="icon">
                  <span className="count">03</span>
                  <i className="flaticon-car-wash-1"></i>
                </div>
                <div className="info">
                  <h4>Mordern Equipment</h4>
                  <p>
                    consectetur adipisicing eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="work-item mb-30">
                <div className="icon">
                  <span className="count">04</span>
                  <i className="flaticon-car-wash"></i>
                </div>
                <div className="info">
                  <h4>Extensive Cleaning</h4>
                  <p>
                    consectetur adipisicing eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkSection;
