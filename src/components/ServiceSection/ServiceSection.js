import React, { useState } from "react";
import SectionTitle from "../Section/SectionTitle/SectionTitle";

const ServiceSection = (props) => {
  const [sectionData] = useState({
    sectionTitle: "Service",
    sectionSubTitle: "Our Best Service",
    sectionTitleClass: "section-white-title mb-50",
  });
  return (
    <>
      <section
        className="service-area service-area-v1 bg_cover pt-110 pb-110"
        style={{ backgroundImage: "url(assets/images/bg/service-bg-1.jpg)" }}
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
              <div className="button-box mb-60">
                <a href="/#" className="main-btn">
                  See All
                </a>
              </div>
            </div>
          </div>
          <div className="row service-slide">
            <div className="col-lg-4 service-item mb-50">
              <div className="icon">
                <i className="flaticon-mechanic"></i>
              </div>
              <div className="info">
                <h4>OPTI COAT</h4>
                <p>
                  consectetur adipisicing elit eiusmod tempor tempor elit
                  incididunt ut labore.
                </p>
                <a href="/#" className="btn_link">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-4 service-item mb-50">
              <div className="icon">
                <i className="flaticon-car-service"></i>
              </div>
              <div className="info">
                <h4>CAR DETAILING</h4>
                <p>
                  consectetur adipisicing elit eiusmod tempor tempor elit
                  incididunt ut labore.
                </p>
                <a href="/#" className="btn_link">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-4 service-item">
              <div className="icon">
                <i className="flaticon-car-wash-1"></i>
              </div>
              <div className="info">
                <h4>CAR POLISH</h4>
                <p>
                  consectetur adipisicing elit eiusmod tempor tempor elit
                  incididunt ut labore.
                </p>
                <a href="/#" className="btn_link">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-4 service-item mb-50">
              <div className="icon">
                <i className="flaticon-car-service"></i>
              </div>
              <div className="info">
                <h4>CAR WASHING</h4>
                <p>
                  consectetur adipisicing elit eiusmod tempor tempor elit
                  incididunt ut labore.
                </p>
                <a href="/#" className="btn_link">
                  Read More
                </a>
              </div>
            </div>

            <div className="col-lg-4 service-item mb-50">
              <div className="icon">
                <i className="flaticon-car-service"></i>
              </div>
              <div className="info">
                <h4>ECO FRIENDLY</h4>
                <p>
                  consectetur adipisicing elit eiusmod tempor tempor elit
                  incididunt ut labore.
                </p>
                <a href="/#" className="btn_link">
                  Read More
                </a>
              </div>
            </div>

            <div className="col-lg-4 service-item mb-50">
              <div className="icon">
                <i className="flaticon-car-service"></i>
              </div>
              <div className="info">
                <h4>EXTERIOR CLEANING</h4>
                <p>
                  consectetur adipisicing elit eiusmod tempor tempor elit
                  incididunt ut labore.
                </p>
                <a href="/#" className="btn_link">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
