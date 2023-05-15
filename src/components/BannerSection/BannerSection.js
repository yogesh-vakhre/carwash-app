import React from "react";
import { Link } from "react-router-dom";
//import PropTypes from 'prop-types'

const BannerSection = (props) => {
  return (
    <>
      <section
        className="banner-area bg_cover"
        style={{ backgroundImage: "url(assets/images/bg/hero-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="hero-content text-center">
                <span className="wow fadeInUp" data-wow-delay=".1s">
                  Wash Your Car & Make It New
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  Keeping Your Car New
                </h1>
                <h3 className="wow fadeInUp" data-wow-delay=".3s">
                  Lorem ipsum dolor amet, consecte Lorem ipsum dolor sit
                  <br />
                  amet consectetur adipisicing eiusmod tempor
                </h3>
                <ul className="wow fadeInUp" data-wow-delay=".4s">
                  <li>
                    <Link to="service" className="main-btn">
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link to="booking" className="main-btn">
                      Book Now
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// BannerSection.propTypes = {

// }

export default BannerSection;
