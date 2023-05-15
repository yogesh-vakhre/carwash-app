import React, { useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import PricingSection from "../../../components/PricingSection/PricingSection";
import SectionTitle from "../../../components/Section/SectionTitle/SectionTitle";
import WorkSection from "../../../components/WorkSection/WorkSection";
import BoookingContactForm from "./BookingContactForm/BoookingContactForm";

const Booking = (props) => {
  const [sectionData] = useState({
    sectionTitle: "Lattest Package",
    sectionSubTitle: "Booking Summary",
    sectionTitleClass: "text-center mb-50",
  });
  return (
    <>
      <Breadcrumbs
        pageTitle="Booking"
        imageUrl="assets/images/bg/breadcrumb-bg-1.jpg"
      />
      <section class="booking-contact-section pt-110 pb-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <SectionTitle
                sectionTitle={sectionData.sectionTitle}
                sectionSubTitle={sectionData.sectionSubTitle}
                sectionTitleClass={sectionData.sectionTitleClass}
              />
            </div>
          </div>
          <BoookingContactForm />
        </div>
      </section>
      <PricingSection  priceingTabs={true}/>
      <WorkSection/>
    </>
  );
};

export default Booking;
