import React from "react";
//import PropTypes from "prop-types";

const Preloader = (props) => {
  return (
    <>
      <div className="preloader">
        <div className="lds-ellipsis">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

//Preloader.propTypes = {};

export default Preloader;
