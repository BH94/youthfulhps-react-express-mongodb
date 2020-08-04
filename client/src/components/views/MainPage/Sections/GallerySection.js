import React from 'react';
import styled from 'styled-components';
import gallery1Img from '../../../../img/gallery-1.jpg';
import gallery2Img from '../../../../img/gallery-2.jpg';
import gallery3Img from '../../../../img/gallery-3.jpg';
import gallery4Img from '../../../../img/gallery-4.jpg';

import CommonCard from '../../../common/CommonCard';

const GallerySectionBlock = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(3, 1fr);
  position: relative;

  .gallery1 {
    grid-column: 1/3;
  }
  .gallery2 {
    grid-column: 3/4;
    grid-row: 1/3;
  }

  .gallery-head {
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(75, 74, 76, 0.5);
    padding: 5rem 10rem;
    letter-spacing: 1rem;

    h2 {
      color: white;
    }
  }

  a {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 842px) {
    /* grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)); */
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    a {
      grid-row: auto !important;
      grid-column: auto !important;
    }

    .gallery-head {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .gallery2 {
      object-position: center -250px;
    }

    .gallery4 {
      object-position: center -100px;
    }
  }
`;

const GallerySection = () => {
  return (
    <GallerySectionBlock>
      <CommonCard
        to="/list/?category=top"
        imgSrc={gallery1Img}
        gridColumn="1/3"
        title="TOP"
        description="My essential top items dreaming of a minimal life"
      ></CommonCard>
      <CommonCard
        to="/list/?category=bottom"
        imgSrc={gallery2Img}
        gridColumn="3/4"
        gridRow="1/3"
        title="BOTTOM"
        description="Minimal look essential bottom items that value comfort"
      ></CommonCard>
      <CommonCard
        to="/list/?category=shoes"
        imgSrc={gallery3Img}
        title="SHOES"
        description="Handmade Shoes Optimized for Minimal Look
      "
      ></CommonCard>
      <CommonCard
        to="/list/?category=etc"
        imgSrc={gallery4Img}
        title="ETC"
        description="Items that are good to wear with minimal and unique points"
      ></CommonCard>
    </GallerySectionBlock>
  );
};

export default GallerySection;
