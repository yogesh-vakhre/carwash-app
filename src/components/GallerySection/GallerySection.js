import React, { useState } from "react";
import SectionTitle from "../Section/SectionTitle/SectionTitle";

const GallerySection = (props) => {
  const [sectionData] = useState({
    sectionTitle: "Lattest Work",
    sectionSubTitle: "Our Latest Gallery",
    sectionTitleClass: "text-center mb-55",
  });
  return (
    <>
      <section
        className="gallery-section-area pt-120 pb-90"
        id="gallery-filter"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <SectionTitle
                sectionTitle={sectionData.sectionTitle}
                sectionSubTitle={sectionData.sectionSubTitle}
                sectionTitleClass={sectionData.sectionTitleClass}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="filter-button text-center mb-70">
                <button className="filter-btn active" data-filter="*">
                  All
                </button>
                <button className="filter-btn" data-filter=".cat-1">
                  Hand Wash
                </button>
                <button className="filter-btn" data-filter=".cat-2">
                  Hand Wax
                </button>
                <button className="filter-btn" data-filter=".cat-3">
                  Auto Wash
                </button>
                <button className="filter-btn" data-filter=".cat-4">
                  Tripple
                </button>
                <button className="filter-btn" data-filter=".cat-5">
                  Auto Detils
                </button>
              </div>
            </div>
          </div>
          <div className="filter-grid row">
            <div className="col-lg-3 col-md-6 col-sm-12 grid-column cat-1">
              <div className="gallery-item mb-30">
                <div className="gallery-img">
                  <a
                    href="assets/images/gallery/gallery-1.jpg"
                    className="image-popup"
                  >
                    <img
                      src="assets/images/gallery/gallery-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 grid-column cat-2">
              <div className="gallery-item mb-30">
                <div className="gallery-img">
                  <a
                    href="assets/images/gallery/gallery-2.jpg"
                    className="image-popup"
                  >
                    <img
                      src="assets/images/gallery/gallery-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 grid-column cat-3">
              <div className="gallery-item mb-30">
                <div className="gallery-img">
                  <a
                    href="assets/images/gallery/gallery-3.jpg"
                    className="image-popup"
                  >
                    <img
                      src="assets/images/gallery/gallery-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 grid-column cat-4">
              <div className="gallery-item mb-30">
                <div className="gallery-img">
                  <a
                    href="assets/images/gallery/gallery-4.jpg"
                    className="image-popup"
                  >
                    <img
                      src="assets/images/gallery/gallery-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 grid-column cat-5">
              <div className="gallery-item mb-30">
                <div className="gallery-img">
                  <a
                    href="assets/images/gallery/gallery-5.jpg"
                    className="image-popup"
                  >
                    <img
                      src="assets/images/gallery/gallery-5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 grid-column cat-3">
              <div className="gallery-item mb-30">
                <div className="gallery-img">
                  <a
                    href="assets/images/gallery/gallery-6.jpg"
                    className="image-popup"
                  >
                    <img
                      src="assets/images/gallery/gallery-6.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="button-box text-center mt-20">
                <a href="/#" className="main-btn">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GallerySection;
