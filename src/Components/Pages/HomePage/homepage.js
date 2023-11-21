import React from "react";
import Navbar from "../../../reusable/navbar/container";
import HeroCarousel from "./components/HeroCarousel";
import OfferSection from "./components/offers";
import Categories from "./components/Categories";

const Homepage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroCarousel />
      <OfferSection />
      <Categories />
    </>
  );
};

export default Homepage;
