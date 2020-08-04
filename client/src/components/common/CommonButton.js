import React from 'react';
import styled, { css } from 'styled-components';

export const buttonStyled = css`
  width: ${(props) => props.width || '100%'};
  font-size: 2rem;
  font-weight: bolder;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  border: 2px solid white;
  border-radius: 37px;
  background: none;
  box-shadow: 3px 3px 5px #6f7a64, -3px -3px 5px #96a488;
  margin-top: 2rem;
  padding: 1rem 2rem;
  cursor: pointer;

  &:hover {
    background: white;
    font-weight: bolder;
    color: #39423a;
  }
`;

const StyledButton = styled.button`
  ${buttonStyled}
`;

const StyledLink = styled.a`
  ${buttonStyled}
`;

const CommonButton = (props) => {
  return props.to || props.href ? (
    <StyledLink {...props} />
  ) : (
    <StyledButton {...props} />
  );
};

export default CommonButton;
