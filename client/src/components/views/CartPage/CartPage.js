import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {
  getCartItems,
  removeCartItem,
  onSuccessBuy,
} from "../../../_actions/user_actions";
import styled from "styled-components";
import CartListItem from "./sections/CartListItem";
import CartHeader from "./sections/CartHeader";
import { Helmet } from "react-helmet";

const CartPageBlock = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(#c6b9b0, #2c303c);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CartListBlock = styled.div`
  width: 80%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;

  @media screen and (max-width: 798px) {
    margin-top: 10rem;
    width: 95%;
  }
`;

const StyledButton = styled(Link)`
  transition: 0.5s;
  border: 3px solid black;
  border-radius: 15px;
  font-weight: bolder;
  color: white;
  background: none;
  padding: 1rem 1rem;
  width: 30rem;
  text-decoration: none;
  text-align: center;

  &:hover {
    background: black;
    color: white;
  }
`;

const CartPage = (props) => {
  const [total, setTotal] = useState(0);
  const [showTotal, setShowTotal] = useState(false);
  const dispatch = useDispatch();
  const userData = props.user.userData;
  useEffect(() => {
    const cartItems = [];
    if (userData && userData.cart) {
      if (userData.cart.length > 0) {
        userData.cart.forEach((item) => cartItems.push(item.id));

        dispatch(getCartItems(cartItems, userData.cart)).then((response) =>
          calTotal(response.payload)
        );
      }
    }
  }, [userData]);

  const calTotal = (cartDetails) => {
    let tmpTotal = 0;
    cartDetails.forEach((cartDetail) => {
      tmpTotal += parseInt(cartDetail.price, 10) * cartDetail.quantity;
    });

    setTotal(tmpTotal);
    setShowTotal(true);
  };

  const removeFormCart = (productId) => {
    dispatch(removeCartItem(productId)).then((response) => {
      if (response.payload.productInfo.length <= 0) {
        setShowTotal(false);
      }
    });
  };

  const transactionSuccess = (data) => {
    dispatch(
      onSuccessBuy({ paymentData: data, cartDetail: props.user.cartDetail })
    ).then((response) => {
      if (response.payload.success) {
        setShowTotal(false);
        props.history.push("/history");
      }
    });
  };

  return (
    <CartPageBlock>
      <Helmet>
        <title>YTHFT - Cart</title>
      </Helmet>
      <CartListBlock>
        {props.user.cartDetail && userData && (
          <CartHeader
            total={total}
            showTotal={showTotal}
            userData={userData}
            cartDetail={props.user.cartDetail}
            transactionSuccess={transactionSuccess}
          />
        )}

        {props.user.cartDetail && props.user.cartDetail.length >= 1 ? (
          props.user.cartDetail.map((item, index) => {
            return (
              <CartListItem
                product={item}
                key={index}
                removeItem={removeFormCart}
              />
            );
          })
        ) : (
          <>
            <h2 style={{ color: "white" }}>Empty Cart</h2>
            <StyledButton className="button-font" to="/gallery">
              To go shopping
            </StyledButton>
          </>
        )}
      </CartListBlock>
    </CartPageBlock>
  );
};

export default withRouter(CartPage);
