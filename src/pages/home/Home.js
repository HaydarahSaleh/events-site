import React from "react";
import HomeSection from "./mediaCenter/HomeSection";
import Slider from "./slider/Slider";
import EventsSection from "./events/EventsSection";
import AboutSection from "./aboutSection/AboutSection";
import Gallery from "./mediaCenter/HomeSection";
import { Box } from "@mui/material";
const Home = ({ quickLinks, configurations }) => {
  return (
    <>
      <Box sx={{ height: 40 }}></Box>
      <AboutSection />
      <EventsSection />
      <Gallery />
    </>
  );
};
export default Home;
