import React from "react";
import Data from "../Data";
import { Link } from "react-router-dom";

const Fitness = () => {
  const FitnessData = Data.filter((item) => item.category === "Fitness");

  return (
    <>
      <h1>Fitness</h1>
      <div className="blog-section-container">
        {FitnessData.map((fitnessdata) => (
          <Link to={`/details/${fitnessdata.id}`}>
            <div className="blog-section-div">
              <h1 className="blog-section-head">{fitnessdata.title}</h1>
              <img src={fitnessdata.img_url} className="blog-section-img" />
              <p className="blog-section-desc">{fitnessdata.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Fitness;
