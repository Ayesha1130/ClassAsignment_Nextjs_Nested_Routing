import React from "react";
import customM from "./customM.module.css";

const Main = () => {
  return (
    <div className={customM.mContainer}>
      <h1 className={customM.titleM}>Welcome to Coffee Haven</h1>
      <p className={customM.paraM}>
        Our mission is to provide a tasty, locally-sourced coffee experience.
      </p>
      <p className={customM.paraM}>
        We strive to create a space where customers can enjoy our premium coffee
        beans, support local farmers, and support the community.
      </p>
    </div>
  );
};

export default Main;
