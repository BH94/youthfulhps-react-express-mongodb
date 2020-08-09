import React from "react";
import styled from "styled-components";
import HeroImg from "../../../../img/hero-image.jpg";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const HeroSectionBlock = styled.div`
  overflow: hidden;
  min-height: 200vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), transparent),
    url(${HeroImg});
  background-size: cover;
  background-position: center;
`;

const HeroSection = () => {
  return (
    <HeroSectionBlock>
      <h1 className="hero-text">YOUTHFULHPS</h1>
      <h3 className="hero-sub-text">We make honest products,</h3>
      <h3 className="hero-sub-text">durable and timeless</h3>
    </HeroSectionBlock>
  );
};

export default HeroSection;
