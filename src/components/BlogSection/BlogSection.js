import React, { useState } from "react";
import SectionTitle from "../Section/SectionTitle/SectionTitle";

const BlogSection = (props) => {
  const [sectionData] = useState({
    sectionTitle: "Our latest Blog",
    sectionSubTitle: "Our Recent News",
    sectionTitleClass: "text-center mb-50",
  });
  return (
    <>
      <section
        className="blog-grid-secton pb-120 bg_cover"
        style={{ backgroundImage: "url(assets/images/bg/map-bg-1.jpg)" }}
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
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-item mb-50">
                <div className="post-thumbnail">
                  <a href="/#">
                    <img
                      src="assets/images/blog/blog-grid-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="entry-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span className="post-date">
                          <i className="fas fa-calendar-alt"></i>
                          <a href="/#">5 SEP 2021</a>
                        </span>
                      </li>
                      <li>
                        <span className="comment">
                          <i className="far fa-comment"></i>
                          <a href="/#">Comments (03)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <a href="blog-details.html">
                      Smash Podcast Epiod With Paul Boag
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt labore dolore magna aliquaenim
                    dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-item mb-50">
                <div className="post-thumbnail">
                  <a href="/#">
                    <img
                      src="assets/images/blog/blog-grid-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="entry-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span className="post-date">
                          <i className="fas fa-calendar-alt"></i>
                          <a href="/#">5 SEP 2021</a>
                        </span>
                      </li>
                      <li>
                        <span className="comment">
                          <i className="far fa-comment"></i>
                          <a href="/#">Comments (03)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <a href="blog-details.html">
                      Smash Podcast Epiod With Paul Boag
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt labore dolore magna aliquaenim
                    dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-item mb-50">
                <div className="post-thumbnail">
                  <a href="/#">
                    <img
                      src="assets/images/blog/blog-grid-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="entry-content">
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span className="post-date">
                          <i className="fas fa-calendar-alt"></i>
                          <a href="/#">5 SEP 2021</a>
                        </span>
                      </li>
                      <li>
                        <span className="comment">
                          <i className="far fa-comment"></i>
                          <a href="/#">Comments (03)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <a href="blog-details.html">
                      Smash Podcast Epiod With Paul Boag
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt labore dolore magna aliquaenim
                    dolore
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="button-box text-center">
                <a href="/#" className="main-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
