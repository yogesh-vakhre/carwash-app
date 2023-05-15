import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";

const Contact = (props) => {
  return (
    <>
    <Breadcrumbs
        pageTitle="Contact Us"
        imageUrl="assets/images/bg/breadcrumb-bg-1.jpg"
      />
      <section
        class="contact-area bg_cover pt-120 pb-120"
        style={{ backgroundImage: "url(assets/images/bg/contact-bg-1.jpg)" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="contact-wrapper">
                <div class="section-title mb-40">
                  <h3>Discussig With Us</h3>
                </div>
                <form action="#" class="contact-form">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form_group">
                        <input
                          type="text"
                          class="form_control"
                          placeholder="Enter Name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form_group">
                        <input
                          type="email"
                          class="form_control"
                          placeholder="Enter Email"
                          name="email"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form_group">
                        <input
                          type="text"
                          class="form_control"
                          placeholder="Subject"
                          name="subject"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form_group">
                        <input
                          type="text"
                          class="form_control"
                          placeholder="Phone"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form_group">
                        <textarea
                          class="form_control"
                          placeholder="Message"
                          name="message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form_button">
                        <button class="main-btn">Submit</button>
                        <button class="main-btn reset-btn">Reset</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="contact-information">
                <div class="box">
                  <div class="icon">
                    <i class="flaticon-maps-and-flags"></i>
                  </div>
                  <div class="info">
                    <h5>Our Office Location</h5>
                    <p>420 Love Sreet 133/2 Mirpur Dhaka</p>
                  </div>
                </div>
                <div class="box">
                  <div class="icon">
                    <i class="flaticon-phone-call"></i>
                  </div>
                  <div class="info">
                    <h5>Our Contact Number</h5>
                    <p>
                      <a href="tel:+06617800628">+(066) 517 800 628</a>
                    </p>
                  </div>
                </div>
                <div class="box">
                  <div class="icon">
                    <i class="flaticon-envelope"></i>
                  </div>
                  <div class="info">
                    <h5>Our Contact E-mail</h5>
                    <p>
                      <a href="mailto:info@example.com"> info@example.com</a>
                    </p>
                  </div>
                </div>
                <div class="box">
                  <div class="social-box">
                    <ul>
                      <li>
                        <span>Follow Us:</span>
                      </li>
                      <li>
                        <a href="/#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <i class="fab fa-skype"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/#">
                          <i class="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
