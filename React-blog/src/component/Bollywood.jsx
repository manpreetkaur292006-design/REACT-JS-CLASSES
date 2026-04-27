import React from "react";
import Data from "../Data";
import { Link } from "react-router-dom";

const Bollywood = () => {
  const BollywoodData = Data.filter((item) => item.category === "Bollywood");

  return (
    <>
      <h1>Bollywood</h1>
      <div className="blog-section-container">
        {BollywoodData.map((bollydata) => (
          <Link to={`/details/${bollydata.id}`}>
            <div className="blog-section-div">
              <h1 className="blog-section-head">{bollydata.title}</h1>
              <img src={bollydata.img_url} className="blog-section-img" />
              <p className="blog-section-desc">{bollydata.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Bollywood;
