import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = (props) => {
  return (
    <>
      <div className="row service-slide">
        <div className="col-lg-4 service-item mb-50">
          <div className="icon">
            <i className="flaticon-mechanic"></i>
          </div>
          <div className="info">
            <h4>OPTI COAT</h4>
            <p>
              consectetur adipisicing elit eiusmod tempor tempor elit incididunt
              ut labore.
            </p>
            <Link to="#" className="btn_link">
              Read More
            </Link>
          </div>
        </div>
        <div className="col-lg-4 service-item mb-50">
          <div className="icon">
            <i className="flaticon-car-service"></i>
          </div>
          <div className="info">
            <h4>CAR DETAILING</h4>
            <p>
              consectetur adipisicing elit eiusmod tempor tempor elit incididunt
              ut labore.
            </p>
            <Link to="#" className="btn_link">
              Read More
            </Link>
          </div>
        </div>
        <div className="col-lg-4 service-item">
          <div className="icon">
            <i className="flaticon-car-wash-1"></i>
          </div>
          <div className="info">
            <h4>CAR POLISH</h4>
            <p>
              consectetur adipisicing elit eiusmod tempor tempor elit incididunt
              ut labore.
            </p>
            <Link to="#" className="btn_link">
              Read More
            </Link>
          </div>
        </div>
        <div className="col-lg-4 service-item mb-50">
          <div className="icon">
            <i className="flaticon-car-service"></i>
          </div>
          <div className="info">
            <h4>CAR WASHING</h4>
            <p>
              consectetur adipisicing elit eiusmod tempor tempor elit incididunt
              ut labore.
            </p>
            <Link to="#" className="btn_link">
              Read More
            </Link>
          </div>
        </div>

        <div className="col-lg-4 service-item mb-50">
          <div className="icon">
            <i className="flaticon-car-service"></i>
          </div>
          <div className="info">
            <h4>ECO FRIENDLY</h4>
            <p>
              consectetur adipisicing elit eiusmod tempor tempor elit incididunt
              ut labore.
            </p>
            <Link to="#" className="btn_link">
              Read More
            </Link>
          </div>
        </div>

        <div className="col-lg-4 service-item mb-50">
          <div className="icon">
            <i className="flaticon-car-service"></i>
          </div>
          <div className="info">
            <h4>EXTERIOR CLEANING</h4>
            <p>
              consectetur adipisicing elit eiusmod tempor tempor elit incididunt
              ut labore.
            </p>
            <Link to="#" className="btn_link">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
