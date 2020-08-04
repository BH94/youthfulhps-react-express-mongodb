import React from 'react';
import styled from 'styled-components';
import HeroImg from '../../../../img/hero-image.jpg';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const HeroSectionBlock = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
    top: -25%;
    color: white;
    font-weight: 500;
  }
  .panel span {
    position: relative;
    display: block;
    top: 50%;
  }

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), transparent),
    url(${HeroImg});
  background-size: cover;
  background-position: center;
`;

const HeroSection = () => {
  return (
    <HeroSectionBlock>
      <Controller>
        <Scene triggerHook="onLeave" duration="100%" pin>
          <Timeline wrapper={<div id="pinContainer" />}>
            <section className="panel hero-text">
              <span>YOUTHFULHPS</span>
            </section>
            <Tween
              from={{ y: '20%', opacity: 0, color: '#2F4D52' }}
              to={{ opacity: 1, color: 'white' }}
            >
              <section className="panel hero-sub-text">
                <span>We make honest products,</span>
              </section>
            </Tween>
            <Tween
              from={{ y: '30%', opacity: 0, color: '#2F4D52' }}
              to={{ opacity: 1, color: 'white' }}
            >
              <section className="panel hero-sub-text">
                <span>durable and timeless</span>
              </section>
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
    </HeroSectionBlock>
  );
};

export default HeroSection;
