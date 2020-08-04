import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { BACK_SERVER_URL } from "../Config";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../_actions/user_actions";

import { Badge } from "antd";
import {
  ShoppingCartOutlined,
  LogoutOutlined,
  UploadOutlined,
  LoginOutlined,
  FormOutlined,
  HistoryOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

const HeaderBlock = styled.div`
  z-index: 5;
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled.div`
  min-height: 5vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;

  a {
    padding: 10px 20px;
    color: whitesmoke;
    text-decoration: none;
    cursor: pointer;
    font-weight: bolder;
  }
  .logo {
    text-align: left;
    font-size: 2.4rem;
    letter-spacing: 2px;
    flex: 2 1 40rem;
  }
  .right {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1 1 40rem;
    font-weight: 700;

    svg {
      font-size: 2rem;
    }

    li {
      &:hover {
        svg {
          transition: 0.2s;
          font-size: 2.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding-bottom: 0.5rem;
    .logo {
      text-align: center;
    }
    html {
      font-size: 45%;
    }
  }
`;

const Header = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // const adminEmail = "admin@test.com";

  const logoutHandler = () => {
    dispatch(logoutUser()).then((response) => {
      if (response.payload.success) {
        window.localStorage.setItem("x_token", response.payload.token);
        window.localStorage.setItem("x_tokenExp", response.payload.tokenExp);
        window.localStorage.setItem("userId", "");
        window.location.reload();
      } else {
        alert("Failed to log out");
      }
    });
  };

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link className="logo logo-font" to="/">
            YTHFH
          </Link>
          <nav className="right">
            <li>
              <Link to="/gallery">
                <UnorderedListOutlined />
              </Link>
            </li>
            {user.userData && !user.userData.isAuth ? (
              <>
                <li>
                  <Link to="/login">
                    <LoginOutlined />
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <FormOutlined />
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  {/* {user.userData && user.userData.cart.length > 0 ? (
                    <Badge
                      className="site-badge-count-4"
                      count={user.userData.cart.length}
                    >
                      <Link to="/user/cart">
                        <ShoppingCartOutlined />
                      </Link>
                    </Badge>
                  ) : (
                    <Link to="/user/cart">
                      <ShoppingCartOutlined />
                    </Link>
                  )} */}
                  <Link to="/user/cart">
                    <ShoppingCartOutlined />
                  </Link>
                </li>

                <li>
                  <Link to="/upload">
                    <UploadOutlined />
                  </Link>
                </li>

                <li>
                  <Link to="/history">
                    <HistoryOutlined />
                  </Link>
                </li>
                <li>
                  <Link onClick={logoutHandler}>
                    <LogoutOutlined />
                  </Link>
                </li>
              </>
            )}
          </nav>
        </Wrapper>
      </HeaderBlock>
    </>
  );
};

export default withRouter(Header);
