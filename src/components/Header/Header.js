import React from "react";
import { Link, Outlet } from "react-router-dom";
//import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <>
      <header className="header-area header-area-v1">
        <div className="header-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-10 col-md-12">
                <div className="header-left">
                  <ul>
                    <li className="text">
                      <span>Monday-Saturday 9 AM - 6 PM </span>
                    </li>
                    <li className="info">
                      <span>
                        <Link to="tel:+0123456789">
                          <i className="fas fa-phone-alt"></i>+ 0123 (456) 789
                        </Link>
                      </span>
                    </li>
                    <li className="info">
                      <span>
                        <Link to="mailto:info@example.com">
                          <i className="far fa-envelope"></i>info@example.com
                        </Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="search-box">
                  <Link
                    to="#"
                    className="search-icon"
                    data-toggle="modal"
                    data-target="#search-modal"
                  >
                    <i className="fas fa-search"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="brand-logo">
                  <Link to="index.html">
                    <img
                      src="assets/images/logo/logo-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 header-box">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box">
                      <i className="flaticon-trophy"></i>
                      <h5>The Best Indastrial</h5>
                      <p>Solution Provider</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box">
                      <i className="flaticon-approved"></i>
                      <h5>Certified Company</h5>
                      <p>ISO 9001-2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-navigation">
          <div className="container">
            <div className="nav-container d-flex align-items-center justify-content-between">
              {/* -- site logo -- */}
              <div className="brand-logo">
                <Link to="index.html">
                  <img
                    src="assets/images/logo/logo-1.png"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </div>
              <div className="nav-menu">
                {/* -- Navbar Close Icon -- */}
                <div className="navbar-close">
                  <div className="cross-wrap">
                    <span className="top"></span>
                    <span className="bottom"></span>
                  </div>
                </div>
                {/* -- nav-menu -- */}
                <nav className="main-menu">
                  <ul>
                    <li className="menu-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="booking">Booking</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="service">Service</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="blog">Blog</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="gallery">Gallery</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="faq">Faq</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                {/* -- nav pushed item -- */}
                <div className="nav-pushed-item">
                  <div className="navbar-btn">
                    <Link to="contact" className="main-btn">
                      Get A Quote
                    </Link>
                  </div>
                </div>
              </div>
              {/* -- nav push item -- */}
              <div className="nav-push-item">
                <div className="navbar-btn">
                  <Link to="booking" className="main-btn">
                    Book Apointment
                  </Link>
                </div>
              </div>
              {/* -- Navbar Toggler -- */}
              <div className="navbar-toggler">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet
       />
    </>
  );
};

//Header.propTypes = {};

export default Header;
