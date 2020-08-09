import React from "react";
import styled from "styled-components";

//word-break 고민중..
const StyledCard = styled.a`
  width: 100%;
  height: 60vh;
  padding: 2rem 1rem;
  background: white;
  display: flex;
  align-items: flex-end;
  transition: 0.5s ease-in-out;
  position: relative;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  word-break: break-all;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(75, 74, 76, 0.5);
    z-index: 2;
    transition: 0.5s all;
    opacity: 0;
  }

  &:hover {
    img {
      object-position: center top;
    }
  }

  &:hover:before {
    opacity: 1;
  }

  .info {
    position: relative;
    align-self: center;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30%);
    transition: 0.5s all;
    h1 {
      font-weight: bolder;
      color: white;
      text-transform: uppercase;
    }
  }

  &:hover .info {
    opacity: 1;
    transform: translateY(0%);
  }

  img {
    transition: 0.5s;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    &:before {
      opacity: 1;
    }
    .info {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

const CommonCard = (props) => {
  return (
    <StyledCard
      href={props.to}
      gridColumn={props.gridColumn}
      gridRow={props.gridRow}
      objPosition={props.objPosition}
    >
      <img src={props.imgSrc} alt={props.title} />
      <div className="info">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </StyledCard>
  );
};

export default CommonCard;
