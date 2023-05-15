import React, { useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../components/Section/SectionTitle/SectionTitle";
import CommentsForm from "./CommentsForm/CommentsForm";
import FaqCategory from "./FaqCategory/FaqCategory";
import FaqItem from "./FaqItem/FaqItem";

const Faq = (props) => {
  const [sectionData] = useState({
    sectionTitle: "Asked questions",
    sectionSubTitle: "Frequently Asked Questions",
    sectionTitleClass: "text-center mb-50",
  });
  return (
    <>
      <Breadcrumbs
        pageTitle="FAQ"
        imageUrl="assets/images/bg/breadcrumb-bg-1.jpg"
      />
      <section class="faq-section pt-110 pb-80">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <SectionTitle
                sectionTitle={sectionData.sectionTitle}
                sectionSubTitle={sectionData.sectionSubTitle}
                sectionTitleClass={sectionData.sectionTitleClass}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8">
              <div class="faq-wrapper mb-60">
                <div class="accordion" id="accordionExample">
                  <FaqItem />
                </div>
              </div>
              <CommentsForm />
            </div>
            <div class="col-lg-4">
              <FaqCategory />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
