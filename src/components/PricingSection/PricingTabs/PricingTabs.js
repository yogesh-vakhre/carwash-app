import React from "react";

const PricingTabs = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="pricing-tabs mb-60">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#cat1">
                  <i className="flaticon-taxi"></i>Regular Taxi car
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#cat2">
                  <i className="flaticon-car"></i>Medium Size Car
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#cat3">
                  <i className="flaticon-delivery-truck"></i> Van Car
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#cat4">
                  <i className="flaticon-sport-car"></i>Privet Car
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#cat5">
                  <i className="flaticon-car"></i>Small car
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#cat6">
                  <i className="flaticon-delivery-truck"></i>Truck size
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingTabs;
