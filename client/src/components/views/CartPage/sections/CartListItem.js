import React from "react";
import styled from "styled-components";
import { CloseCircleOutlined } from "@ant-design/icons";

const Item = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.5);

  margin-bottom: 2rem;

  display: flex;
  .about-image {
    flex: 1 1 40rem;
    position: relative;
    height: 30rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .about-text {
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    h5 {
      font-size: 2.5rem;
      color: white;
      text-transform: uppercase;
      font-weight: bolder;
    }

    p {
      color: white;
      word-break: break-all;
    }

    .btn {
      border: none;
      background: none;
      position: absolute;
      top: 3rem;
      right: 3rem;

      svg {
        font-size: 2rem;
        color: white;

        &:hover {
          color: rgba(255, 255, 255, 0.5);
        }
      }
    }

    flex: 2 1 40rem;
    padding: 5rem 4rem;
  }

  @media screen and (max-width: 768px) {
    .about-text {
      padding: 7rem 3rem;
    }
  }
`;

const CartListItem = ({ product, removeItem }) => {
  return (
    <Item>
      <div className="about-image">
        <img
          src={`http://3.129.149.187:5000/${product.images[0]}`}
          alt={product.images[0]}
        />
      </div>
      <div className="about-text">
        <h5>{product.title}</h5>
        <p>{`${product.price}$ x ${product.quantity}`}</p>
        <button className="btn" onClick={() => removeItem(product._id)}>
          <CloseCircleOutlined />
        </button>
      </div>
    </Item>
  );
};

export default CartListItem;
