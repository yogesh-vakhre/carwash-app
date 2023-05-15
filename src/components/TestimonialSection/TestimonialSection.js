import React, { useState } from "react";
import SectionTitle from "../Section/SectionTitle/SectionTitle";

const TestimonialSection = (props) => {
  const [sectionData] = useState({
    sectionTitle: "Our Testomonial",
    sectionSubTitle: "Testomonial",
    sectionTitleClass: "section-white-title text-center",
  });

  return (
    <>
      <section
        className="testimonial-area-one pt-120 pb-30 bg_cover"
        style={{
          backgroundImage: "url(assets/images/bg/testimonial-bg-1.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-wrapper">
                <SectionTitle
                  sectionTitle={sectionData.sectionTitle}
                  sectionSubTitle={sectionData.sectionSubTitle}
                  sectionTitleClass={sectionData.sectionTitleClass}
                />
                <div className="testimonial-slide-one row">
                  <div className="col-lg-12">
                    <div className="testimonial-box">
                      <i className="flaticon-left-quote"></i>
                      <p>
                        “Lorem ipsum dolor consectetur elit Lorem ipsum dolor
                        sit amet sed do eiusmod tempor incididunt’’
                      </p>
                      <h5>Sarif Jaya Miprut</h5>
                      <span>Profile Manager</span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="testimonial-box">
                      <i className="flaticon-left-quote"></i>
                      <p>
                        “Lorem ipsum dolor consectetur elit Lorem ipsum dolor
                        sit amet sed do eiusmod tempor incididunt’’
                      </p>
                      <h5>Sarif Jaya Miprut</h5>
                      <span>Profile Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="call-back-form">
                <form>
                  <h3>Request A Call Back</h3>
                  <p>consectetur adipisicing tempor incididunt adipisicing.</p>
                  <div className="form_group">
                    <label>Your Name</label>
                    <input type="text" className="form_control" name="name" />
                  </div>
                  <div className="form_group">
                    <label>Phone Number</label>
                    <input type="text" className="form_control" name="phone" />
                  </div>
                  <div className="form_group">
                    <label>Choose Service</label>

                    <select className="form-control" name="service">
                      <option value="Select Service">Select Service</option>
                      <option value="OPTI COAT">OPTI COAT</option>
                      <option value="CAR DETAILING">CAR DETAILING</option>
                      <option value="CAR POLISH">CAR POLISH</option>
                      <option value="CAR WASHING">CAR WASHING</option>
                      <option value="ECO FRIENDLY">ECO FRIENDLY</option>
                      <option value="EXTERIOR CLEANING">
                        EXTERIOR CLEANING
                      </option>
                    </select>
                  </div>
                  <div className="form_group">
                    <button className="main-btn">Send Request</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
