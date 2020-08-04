import React from 'react';
import styled from 'styled-components';
import aboutImg from '../../../../img/about-image.png';

const AboutSectionBlock = styled.div`
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  .about-image {
    flex: 1 1 40rem;
    background-color: #5b6958;
    position: relative;
    h5 {
      color: white;
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, 50%);
      letter-spacing: 2rem;
      font-weight: bolder;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .about-text {
    background-color: #4b4a4c;
    color: white;
    h2,
    h3 {
      color: white;
      text-transform: uppercase;
    }
    p {
      font-size: 1.5rem;
    }
    flex: 2 1 40rem;
    padding: 3rem 8rem;
    justify-content: space-around;
  }

  @media screen and (max-width: 768px) {
    .about-text {
      padding: 3rem 3rem;
    }
  }
`;

const AboutSection = () => {
  return (
    <AboutSectionBlock>
      <div className="about-image">
        <h5 className="header-font">HERITAGE</h5>
        <img src={aboutImg} alt="heritage" />
      </div>
      <div className="about-text flex">
        {/* s<h2>about joi</h2> */}
        <div>
          <h3>minimal</h3>
          <p>
            Having more doesn't mean there are many options. It only provides
            essential items for minimalists. Pursue the design and color of
            clothes that can create a comfortable style that is natural and not
            awkward anytime, anywhere. So that you can focus more on your own
            inner self, not on style.
          </p>
        </div>
        <div>
          <h3>durable and timeless</h3>
          <p>
            Use durable, timeless materials and pursues a trendy style of the
            times. That's why we try to create a more trendy style and combine
            classic and modern styles, but make clothes that are minimal and
            long-lasting.
          </p>
        </div>
        <div>
          <h3>nature-friendly</h3>
          <p>
            Strong leadership is needed to cope with the environmental crisis
            facing our society right now facing. If you found the cause of the
            problem to act. We are willing to take risks and act to protect the
            stability, integrity and beauty of nature and life. We support this
            movement. We will add strength with nature-friendly materials and
            protect our planet.
          </p>
        </div>
      </div>
    </AboutSectionBlock>
  );
};

export default AboutSection;
