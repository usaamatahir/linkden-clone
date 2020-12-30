import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import "./Widgets.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widget = () => {
  const newsArticle = (heading: string, subtitle: string) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleleft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleright">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("LinkedIn Clone is completed", "Top News")}
    </div>
  );
};

export default Widget;
