import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Col, Row } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";

import qs from "qs";
import "antd/dist/antd.css";
import { Helmet } from "react-helmet";

import CommonCard from "../../common/CommonCard";

const LandingPageBlock = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  background: #4b4a4c;
  align-items: center;
  height: 100%;
  min-height: 100vh;

  @media screen and (max-width: 1024px) {
  }
`;

const LandingBlock = styled.div`
  width: 95%;
  background: none;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;

const StyledMoreButton = styled.button`
  border: none;
  background: none;
  font-size: 2rem;
  font-weight: bolder;
  color: #736565;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    animation: arrowAnimation 0.5s infinite alternate ease-in-out;
  }

  @keyframes arrowAnimation {
    from {
      transform: translate(0, 0%);
    }
    to {
      transform: translate(0%, 10%);
    }
  }
`;

const LandingPage = ({ location }) => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(6);
  const [postSize, setPostSize] = useState(0);

  const { category } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  useEffect(() => {
    const body = {
      skip: skip,
      limit: limit,
      category: category,
    };

    getProducts(body);
  }, []);

  const getProducts = (body) => {
    axios
      .post("http://3.129.149.187:5000/api/product/products", body)
      .then((response) => {
        if (response.data.success) {
          if (body.loadMore) {
            setProducts([...products, ...response.data.productInfo]);
          } else {
            setProducts(response.data.productInfo);
          }
          setPostSize(response.data.postSize);
        } else {
          alert("상품을 불러오는데 실패하였습니다.");
        }
      });
  };

  const loadMoreHandler = () => {
    const nextSkip = skip + limit;
    const body = {
      skip: nextSkip,
      limit: limit,
      loadMore: true,
    };
    getProducts(body);
    setSkip(nextSkip);
  };

  const cards = products.map((product, index) => {
    return (
      <Col lg={8} md={12} sm={24} xs={24} key={index}>
        <CommonCard
          key={index}
          to={`/product/${product._id}`}
          title={product.title}
          description={product.description}
          imgSrc={`http://3.129.149.187:5000/${product.images[0]}`}
        />
      </Col>
    );
  });

  return (
    <LandingPageBlock>
      <Helmet>
        <title>{`YTHFT -  ${category.toUpperCase()} Category`}</title>
      </Helmet>
      <h1 className="page-header">{category}</h1>
      <LandingBlock>
        <Row gutter={[0, 0]}>{cards}</Row>
        {/* {cards} */}
      </LandingBlock>
      {postSize >= limit && (
        <StyledMoreButton onClick={loadMoreHandler}>
          <ArrowDownOutlined />
        </StyledMoreButton>
      )}
    </LandingPageBlock>
  );
};

export default withRouter(LandingPage);
