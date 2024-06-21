import React from "react";
import HomeSection from "./mediaCenter/HomeSection";
import Slider from "./slider/Slider";
import EventsSection from "./events/EventsSection";
import AboutSection from "./aboutSection/AboutSection";
import Gallery from "./mediaCenter/HomeSection";
const Home = ({ quickLinks, configurations }) => {
  return (
    <>
      <AboutSection />
      <EventsSection />
      <Gallery />
    </>
  );
};
export default Home;
