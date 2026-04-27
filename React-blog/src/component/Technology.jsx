import React from "react";
import Data from "../Data";
import { Link } from "react-router-dom";

const Technology = () => {
  const TechnologyData = Data.filter((item) => item.category === "Technology");

  return (
    <>
      <h1>Technology</h1>
      <div className="blog-section-container">
        {TechnologyData.map((techdata) => (
          <Link to={`/details/${techdata.id}`}>
            <div className="blog-section-div">
              <h1 className="blog-section-head">{techdata.title}</h1>
              <img src={techdata.img_url} className="blog-section-img" />
              <p className="blog-section-desc">{techdata.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Technology;
