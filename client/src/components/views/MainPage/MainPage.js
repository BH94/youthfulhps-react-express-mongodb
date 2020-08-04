import React from "react";

import HeroSection from "./Sections/HeroSection";
import AboutSection from "./Sections/AboutSection";
import GallerySection from "./Sections/GallerySection";
import { Helmet } from "react-helmet";

const MainPage = () => {
  return (
    <div>
      <Helmet>
        <title>YTHFT</title>
      </Helmet>
      <HeroSection />
      <AboutSection />
      <GallerySection />
    </div>
  );
};

export default MainPage;
