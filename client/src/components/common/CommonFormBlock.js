import React from 'react';
import styled from 'styled-components';

const StyledFormBlock = styled.div`
  width: ${(props) => props.width || '40%'};
  flex-direction: column;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 50px; */
  /* box-shadow: 20px 20px 60px #bec3c9, -20px -20px 60px #ffffff; */
  padding: 2rem 2rem;
  text-align: center;
  margin-top: 5rem;
  /* background: linear-gradient(rgba(198, 185, 176, 0.9), rgba(44, 48, 60, 0.9)); */

  h1 {
    color: white;
    font-weight: bolder;
    letter-spacing: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: 9rem;
  }
`;

const CommonFormBlock = (props) => {
  return <StyledFormBlock {...props} />;
};

export default CommonFormBlock;
