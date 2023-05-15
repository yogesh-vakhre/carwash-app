import React from "react";
import BannerSection from "../../../components/BannerSection/BannerSection";
import AboutSection from "../../../components/AboutSection/AboutSection";
import FeaturesSection from "../../../components/FeaturesSection/FeaturesSection";
import ServiceSection from "../../../components/ServiceSection/ServiceSection";
import GallerySection from "../../../components/GallerySection/GallerySection";
import WorkSection from "../../../components/WorkSection/WorkSection";
// import PricingSection from "../../../components/PricingSection/PricingSection";
import TestimonialSection from "../../../components/TestimonialSection/TestimonialSection";
import BlogSection from "../../../components/BlogSection/BlogSection";

const Home = (props) => {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <FeaturesSection />
      <ServiceSection />
      <GallerySection />
      <WorkSection />
      {/* <PricingSection  priceingTabs={false}/> */}
      <TestimonialSection />
      <BlogSection />
    </>
  );
};

export default Home;
