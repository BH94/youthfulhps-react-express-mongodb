import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../_actions/user_actions';
import styled from 'styled-components';

const InfoBlock = styled.div`
  margin: 10% 5%;
  width: 90%;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductInfo = (props) => {
  const disaptch = useDispatch();

  const clickHandler = () => {
    disaptch(addToCart(props.detail._id));
  };
  return (
    <InfoBlock>
      {`title: ${props.detail.title}`}
      <button onClick={clickHandler}>Add to Cart</button>
    </InfoBlock>
  );
};

export default ProductInfo;
