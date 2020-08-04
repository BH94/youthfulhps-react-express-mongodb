import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART,
  GET_CART_ITEMS,
  REMOVE_CART_ITEM,
  ON_SUCCESS_BUY,
} from "./types";
import { BACK_SERVER_URL, headersConfig } from "../components/Config.js";

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${BACK_SERVER_URL}/api/users/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${BACK_SERVER_URL}/api/users/login`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get(`${BACK_SERVER_URL}/api/users/auth`, headersConfig)
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get(`${BACK_SERVER_URL}/api/users/logout`, headersConfig)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export function addToCart(id) {
  const body = {
    productId: id,
  };
  const request = axios
    .post(`${BACK_SERVER_URL}/api/users/addToCart`, body, headersConfig)
    .then((response) => response.data);

  return {
    type: ADD_TO_CART,
    payload: request,
  };
}

export function getCartItems(cartItems, userCart) {
  const request = axios
    .get(
      `${BACK_SERVER_URL}/api/product/product_by_id?id=${cartItems}&type=array`
    )
    .then((response) => {
      userCart.forEach((cartItem) => {
        response.data.forEach((productDetail, index) => {
          if (cartItem.id === productDetail._id) {
            response.data[index].quantity = cartItem.quantity;
          }
        });
      });
      return response.data;
    });

  return {
    type: GET_CART_ITEMS,
    payload: request,
  };
}

export function removeCartItem(productId) {
  const request = axios
    .get(
      `${BACK_SERVER_URL}/api/users/removeFromCart?id=${productId}`,
      headersConfig
    )
    .then((response) => {
      console.log(response.data);
      response.data.cart.forEach((item) => {
        response.data.productInfo.forEach((product, index) => {
          if (item.id === product._id) {
            response.data.productInfo[index].quantity = item.quantity;
          }
        });
      });

      return response.data;
    });

  return {
    type: REMOVE_CART_ITEM,
    payload: request,
  };
}

export function onSuccessBuy(data) {
  const request = axios
    .post(`${BACK_SERVER_URL}/api/users/successBuy`, data, headersConfig)
    .then((response) => {
      return response.data;
    });

  return {
    type: ON_SUCCESS_BUY,
    payload: request,
  };
}
