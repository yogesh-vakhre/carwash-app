import React from "react";
//import PropTypes from "prop-types";

const SearchBar = (props) => {
  return (
    <>
      <div className="modal fade" id="search-modal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <form>
              <div className="form_group">
                <input
                  type="text"
                  className="form_control"
                  placeholder="Search here..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

//SearchBar.propTypes = {};

export default SearchBar;
