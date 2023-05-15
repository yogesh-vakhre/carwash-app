import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
  return (
    <>
      <section
        className="breadcrumbs-area bg_cover"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="breadcrumbs-content text-center">
                <h1>{props.pageTitle}</h1>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="active">{props.pageTitle}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumbs;
