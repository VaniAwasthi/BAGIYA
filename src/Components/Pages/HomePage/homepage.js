import React from "react";
import Navbar from "../../../reusable/navbar/container";
import HeroCarousel from "./components/HeroCarousel";
import OfferSection from "./components/offers";
import Categories from "./components/Categories";
import FeatureSection from "./components/Features";
import BestSeller from "./components/BestSeller";
import ShoptheLook from "./components/ShoptheLook";
import NewArrival from "./components/NewArivals";

const Homepage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroCarousel />
      <OfferSection />
      <Categories />
      <FeatureSection />
      <BestSeller />
      <ShoptheLook />
      <NewArrival />
    </>
  );
};

export default Homepage;
