import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../_actions/user_actions";
import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Helmet } from "react-helmet";

const DetailPageBlock = styled.div`
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  .about-image {
    flex: 2 1 40rem;
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
      height: 100vh;
      object-fit: cover;
    }
  }
  .about-text {
    background: linear-gradient(#c6b9b0, #2c303c);
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* text-align: left; */

    h2,
    h3 {
      font-weight: bolder;
      text-transform: uppercase;
      color: white;
      letter-spacing: 0.5rem;
    }

    p {
      color: white;
      word-break: break-all;
    }

    flex: 1 1 40rem;
    padding: 5rem 4rem;
  }

  @media screen and (max-width: 768px) {
    .about-text {
      padding: 7rem 3rem;
    }
  }
`;

const StyledButton = styled.button`
  transition: 0.5s;
  border: 3px solid black;
  border-radius: 15px;
  font-size: 2rem;
  font-weight: bolder;
  color: white;
  background: none;
  align-self: center;
  padding: 1.5rem 1rem;
  width: 80%;
  cursor: pointer;

  &:hover {
    background: black;
  }
`;

const DetailProductPage = (props) => {
  const dispatch = useDispatch();

  const productId = props.match.params.productId;

  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);

  const onAddToCart = () => {
    dispatch(addToCart(productId)).then((response) => {
      alert("품목을 카트에 추가하였습니다.");
    });
  };

  useEffect(() => {
    axios
      .get(
        `http://3.129.149.187:5000/api/product/product_by_id?id=${productId}&type=single`
      )
      .then((response) => {
        setProduct(response.data[0]);
      })
      .catch((err) => alert(err));
  }, [productId]);

  useEffect(() => {
    if (product.images && product.images.length > 0) {
      const images = [];

      product.images.forEach((item) => {
        images.push(`http://3.129.149.187:5000/${item}`);
      });
      setImages(images);
    }
  }, [product]);

  return (
    <DetailPageBlock>
      <Helmet>
        <title>YTHFT - Product Details</title>
      </Helmet>
      <div className="about-image">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          stopOnHover
          showStatus={false}
        >
          {images.map((image, index) => {
            return (
              <div>
                <img src={image} alt={`${image}-${index}`} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="about-text">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{`${product.price}$`}</p>
        <StyledButton className="button-font" onClick={onAddToCart}>
          Add to Cart
        </StyledButton>
      </div>
    </DetailPageBlock>
  );
};

export default DetailProductPage;
