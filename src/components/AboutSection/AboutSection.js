import React, { useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../Section/SectionTitle/SectionTitle";
//import PropTypes from 'prop-types'

const AboutSection = (props) => {
  const [sectionData] = useState({
    sectionTitle: "About company",
    sectionSubTitle: "We Discover 45 Years About Car Wash",
    sectionTitleClass: "mb-25",
  });
  return (
    <>
      <section className="about-area about-area-v1 pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-box mt-45">
                <SectionTitle
                  sectionTitle={sectionData.sectionTitle}
                  sectionSubTitle={sectionData.sectionSubTitle}
                  sectionTitleClass={sectionData.sectionTitleClass}
                />
                <p>
                  Sed perspiciatis unde ste natus error voluptatem accusantium
                  architecto doloremque udantium totam rem aperiam eaque ipsa
                  quae inventore veritatis et quasi architecto beatae dicta sunt
                  explicabo aperiam eaque
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box mb-15">
                      <div className="icon">
                        <i className="flaticon-cogs"></i>
                      </div>
                      <div className="info">
                        <h5>Company Experience</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box mb-15">
                      <div className="icon">
                        <i className="flaticon-light-bulb"></i>
                      </div>
                      <div className="info">
                        <h5>Quick Support & Help</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <Link href="#" className="main-btn">
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img-box">
                <div className="img-box img-box-1">
                  <img
                    src="assets/images/about/about-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="img-box img-box-2">
                  <img
                    src="assets/images/about/about-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="experience-box">
                    <h2>
                      25<span>Years Of Experience</span>
                    </h2>
                  </div>
                </div>
                <div className="img-box img-box-3">
                  <img
                    src="assets/images/about/about-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// AboutSection.propTypes = {

// }

export default AboutSection;
