import React from "react";
import { Link } from "react-router-dom";
//import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className="footer-area">
        <div className="footer-top pt-40 pb-40">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="brand-logo">
                  <Link to="#">
                    <img
                      src="assets/images/logo/logo-2.png"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="social-box">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-skype"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-widget-area pt-110 pb-110">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget contact-info-widget">
                  <h4 className="widget-title">Conatct Us</h4>
                  <div className="info-box mb-20">
                    <p>
                      <i className="fas fa-phone-alt"></i>
                      <Link href="tel:+0123456789">+ 0123 (456) 789</Link>
                    </p>
                  </div>
                  <div className="info-box">
                    <h5 className="mb-20">Office Address</h5>
                    <p>
                      <i className="fas fa-map-marker-alt"></i>250 Main Road, D
                      - Block
                      <br />
                      2nd Flor, New York
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget quick-link-widget">
                  <h4 className="widget-title">Quick Links</h4>
                  <ul className="widget-link">
                    <li>
                      <Link to="#">Company History</Link>
                    </li>
                    <li>
                      <Link to="#">Latest Services</Link>
                    </li>
                    <li>
                      <Link to="#">Meet Our Advisor</Link>
                    </li>
                    <li>
                      <Link to="#">What We Do</Link>
                    </li>
                    <li>
                      <Link to="#">Conatct us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget opening-hours-widget">
                  <h4 className="widget-title">Opening Hours</h4>
                  <div className="info-box">
                    <p>Monday - Friday</p>
                    <p>8:00 AM - 9:00 PM</p>
                  </div>
                  <div className="info-box">
                    <p>Monday - Friday</p>
                    <p>8:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="widget newsletters-widget">
                  <h4 className="widget-title">Join Newsletters</h4>
                  <p>
                    Bed perspiciatis unde omnis iste natus error voluptatem
                    accusantium
                  </p>
                  <form className="newsletters-form">
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Enter Your Email"
                        name="email"
                        required
                      />
                      <button className="icon">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bootom-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>
                    @copy 2021 <span>Cash4Junk </span>. All Right Reserved
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-nav">
                  <ul>
                    <li>
                      <Link to="#">Home</Link>
                    </li>
                    <li>
                      <Link to="#">Company</Link>
                    </li>
                    <li>
                      <Link to="#">Services</Link>
                    </li>
                    <li>
                      <Link to="#">Projects</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

//Footer.propTypes = {};

export default Footer;
