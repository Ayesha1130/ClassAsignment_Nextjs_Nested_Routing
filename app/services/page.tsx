import React from "react";
import customM from "../components/customM.module.css";
import custom1 from "../components/custom1.module.css";
import Link from "next/link";

const Services = () => {
  return (
    <div className={customM.mContainer2}>
      <h1 className={customM.titleM}>Our Services</h1>

      <p className={customM.paraM}>
        We offer a variety of coffee brewing methods, including espresso, drip,
        pour-over, and French press. We also have a wide range of beverages
        available, including lattes, cappuccinos, and iced teas.
      </p>

      <Link className={custom1.btn} href='/services/homedelivery'>
        HomeDelivery
      </Link>
    </div>
  );
};

export default Services;
