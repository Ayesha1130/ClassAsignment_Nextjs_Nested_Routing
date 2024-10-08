import React from "react";
import customM from "../components/customM.module.css";

const About = () => {
  return (
    <div className={customM.mContainer2}>
      <h1 className={customM.titleM}>About Us coffee haven</h1>
      <p className={customM.paraM}>
        We are a family-owned and operated coffee shop specializing in
        sustainable and eco-friendly brewing methods. Our mission is to provide
        a taste of our homemade coffee, while also promoting environmental
        consciousness and sustainability. We strive to create a place where you
        can enjoy your favorite coffee without compromising on quality or taste.
        We believe that every cup of coffee should be delicious, balanced, and
        sustainably made.
      </p>
    </div>
  );
};

export default About;
