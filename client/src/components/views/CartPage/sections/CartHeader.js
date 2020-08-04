import React from "react";
import styled from "styled-components";
import kakaopayIcon from "../../../../img/kakaopay-icon.png";

const CartHeaderBlock = styled.div`
  width: 100%;
  height: 15rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: white;
  }
`;

const StyledButton = styled.button`
  transition: 0.5s;
  border: 3px solid black;
  border-radius: 15px;
  font-weight: bolder;
  color: white;
  background: none;
  padding: 1rem 1rem;
  width: 30rem;
  cursor: pointer;

  &:hover {
    background: black;
  }
`;

const CartHeader = (props) => {
  const { name, email } = props.userData;
  const total = props.total;
  let title = ``;
  props.cartDetail.forEach((item) => {
    title += item.title + ", ";
  });

  /////여기

  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init("imp25921273");

    const data = {
      pg: "kakaopay",
      pay_method: "card",
      merchant_uid: `mid_${new Date().getTime()}`,
      paydate: `${new Date().getTime()}`,
      amount: total * 1000,
      name: title,
      buyer_name: name,
      buyer_email: email,
    };

    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    const { success, error_msg } = response;

    if (success) {
      alert("결제 성공");
      props.transactionSuccess(response);
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  return (
    <CartHeaderBlock>
      {props.showTotal && (
        <>
          <h2>{`Total: ${total} $`}</h2>
          <StyledButton onClick={onClickPayment}>kakaopay</StyledButton>
        </>
      )}
    </CartHeaderBlock>
  );
};

export default CartHeader;
