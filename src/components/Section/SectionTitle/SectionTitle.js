import React from "react";

const SectionTitle = (props) => {
  const { sectionTitle, sectionSubTitle, sectionTitleClass } = props;
  return (
    <>
      <div className={`section-title ${sectionTitleClass}`}>
        <span className="span">{sectionTitle}</span>
        <h2>{sectionSubTitle} </h2>
      </div>
    </>
  );
};

export default SectionTitle;
