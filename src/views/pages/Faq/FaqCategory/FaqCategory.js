import React from "react";

const FaqCategory = (props) => {
  return (
    <>
      <div class="sidebar-widget-area">
        <div class="widget faq-categories-widget mb-40">
          <h4 class="widget-title">
            Faq Category
            <span>
              <i class="flaticon-help"></i>
            </span>
          </h4>
          <ul class="categories-list">
            <li>
              <a href="/#">Ganeral Question</a>
            </li>
            <li>
              <a href="/#">Cloth Hand Wash</a>
            </li>
            <li>
              <a href="/#">Auto Detaling</a>
            </li>
            <li>
              <a href="/#">Exterior Hand Wash</a>
            </li>
            <li>
              <a href="/#">Car Washing</a>
            </li>
            <li>
              <a href="/#">Wheel Shine</a>
            </li>
          </ul>
        </div>
        <div
          class="widget faq-contact-widget mb-40 bg_cover"
          style={{
            backgroundImage: "url(assets/images/bg/contact-widget-bg.png)",
          }}
        >
          <div class="contact-info">
            <a href="/#" class="main-btn">
              Contact Now
            </a>
          </div>
        </div>
        <div class="widget faq-popular-widget mb-40">
          <h4 class="widget-title">Most Popular</h4>
          <ul class="list">
            <li>
              <a href="/#">You can pay online for your basic appointment?</a>
            </li>
            <li>
              <a href="/#">
                Pay for your wash electronically securely for your wash?
              </a>
            </li>
            <li>
              <a href="/#">Book appointment under minutes for your wash?</a>
            </li>
            <li>
              <a href="/#">You can online your appointment?</a>
            </li>
            <li>
              <a href="/#">Book appointment online minutes?</a>
            </li>
            <li>
              <a href="/#">You can pay online for your basic appointment?</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FaqCategory;
