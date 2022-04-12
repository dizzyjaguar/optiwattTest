import React from "react";
import "./App.css";

const Feature = ({ title, icon }) => {
  return (
    <div className="FeatureContainer">
      {icon}
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus turpis sed sapien amet, purus condimentum sit.</p>
    </div>
  );
};

export default Feature;
