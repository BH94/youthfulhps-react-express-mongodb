import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product

//About Auth

import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import MainPage from "./views/MainPage/MainPage";
import GallerySection from "./views/MainPage/Sections/GallerySection";
import LandingPage from "./views/LandingPage/LandingPage";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";
import CartPage from "./views/CartPage/CartPage";
import PaymentHistoryPage from "./views/HistoryPage/HistoryPage";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";
import Header from "./common/Header";

//About User
import NotFoundPage from "./views/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <div className="wrapper">
        {/* <NavBar /> */}
        <div className="contentsWrapSpacer" />
        <Switch>
          <div className="contentsWrap">
            <Route exact path="/" component={Auth(MainPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
            <Route
              path={["/list/@:category", "/list"]}
              component={Auth(LandingPage, null)}
            />
            <Route path="/upload" component={Auth(UploadProductPage, true)} />
            <Route path="/gallery" component={Auth(GallerySection, null)} />
            <Route
              path="/product/:productId"
              component={Auth(DetailProductPage, null)}
            />
            <Route path="/user/cart" component={Auth(CartPage, true)} />
            <Route path="/history" component={Auth(PaymentHistoryPage, true)} />
          </div>
          <Route component={Auth(NotFoundPage, null)} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Suspense>
  );
}

export default App;
