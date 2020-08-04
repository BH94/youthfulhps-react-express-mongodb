import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/user_actions";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form } from "antd";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import CommonFormBlock from "../../common/CommonFormBlock";
import CommonInput from "../../common/CommonInput";
import CommonButton from "../../common/CommonButton";
import { Helmet } from "react-helmet";

const LoginPageBlock = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #828f76;
`;

const StyledLink = styled.a`
  color: "#39423a";
  font-size: 1.2rem;

  &:hover {
    font-weight: bolder;
  }
`;

const LoginPage = (props) => {
  const dispatch = useDispatch();

  const [formErrorMessage, setFormErrorMessage] = useState("");

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password,
          };

          dispatch(loginUser(dataToSubmit))
            .then((response) => {
              if (response.payload.loginSuccess) {
                window.localStorage.setItem("x_token", response.payload.token);
                window.localStorage.setItem(
                  "x_tokenExp",
                  response.payload.tokenExp
                );
                window.localStorage.setItem("userId", response.payload.userId);
                window.location.reload();
                props.history.push("/");
              } else {
                setFormErrorMessage("Check out your Account or Password again");
              }
            })
            .catch((err) => {
              setFormErrorMessage("Check out your Account or Password again");
              setTimeout(() => {
                setFormErrorMessage("");
              }, 3000);
            });
          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <LoginPageBlock>
            <Helmet>
              <title>YTHFT - Sign In</title>
            </Helmet>
            <CommonFormBlock>
              <h1>LOGIN</h1>
              <form
                onSubmit={handleSubmit}
                style={{ width: "100%" }}
                method="POST"
              >
                <Form.Item required>
                  <CommonInput
                    id="email"
                    placeholder="E-MAIL"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                </Form.Item>

                <Form.Item required>
                  <CommonInput
                    id="password"
                    type="password"
                    placeholder="PASSWORD"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                </Form.Item>

                {formErrorMessage && (
                  <label>
                    <p
                      style={{
                        color: "#ff0000bf",
                        fontSize: "0.7rem",
                        border: "1px solid",
                        padding: "1rem",
                        borderRadius: "10px",
                      }}
                    >
                      {formErrorMessage}
                    </p>
                  </label>
                )}

                <Form.Item>
                  <div>
                    <CommonButton
                      htmlType="submit"
                      className="login-form-button"
                      style={{ minWidth: "100%" }}
                      disabled={isSubmitting}
                      onSubmit={handleSubmit}
                    >
                      LOGIN
                    </CommonButton>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <StyledLink
                      href="/register"
                      style={{ color: "#39423a", fontWeight: "bolder" }}
                    >
                      Sign Up!
                    </StyledLink>
                  </div>
                </Form.Item>
              </form>
            </CommonFormBlock>
          </LoginPageBlock>
        );
      }}
    </Formik>
  );
};

export default withRouter(LoginPage);

// import React, { useState } from "react";
// import { withRouter } from "react-router-dom";
// import { loginUser } from "../../../_actions/user_actions";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { Form, Input, Button, Checkbox, Typography } from "antd";
// import { useDispatch } from "react-redux";

// import { UserOutlined, LockOutlined } from "@ant-design/icons";

// const { Title } = Typography;

// function LoginPage(props) {
//   const dispatch = useDispatch();
//   const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

//   const [formErrorMessage, setFormErrorMessage] = useState("");
//   const [rememberMe, setRememberMe] = useState(rememberMeChecked);

//   const handleRememberMe = () => {
//     setRememberMe(!rememberMe);
//   };

//   const initialEmail = localStorage.getItem("rememberMe")
//     ? localStorage.getItem("rememberMe")
//     : "";

//   return (
//     <Formik
//       initialValues={{
//         email: initialEmail,
//         password: "",
//       }}
//       validationSchema={Yup.object().shape({
//         email: Yup.string()
//           .email("Email is invalid")
//           .required("Email is required"),
//         password: Yup.string()
//           .min(6, "Password must be at least 6 characters")
//           .required("Password is required"),
//       })}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           let dataToSubmit = {
//             email: values.email,
//             password: values.password,
//           };

//           dispatch(loginUser(dataToSubmit))
//             .then((response) => {
//               if (response.payload.loginSuccess) {
//                 window.localStorage.setItem("x_token", response.payload.token);
//                 window.localStorage.setItem(
//                   "x_tokenExp",
//                   response.payload.tokenExp
//                 );
//                 window.localStorage.setItem("userId", response.payload.userId);
//                 if (rememberMe === true) {
//                   window.localStorage.setItem("rememberMe", values.id);
//                 } else {
//                   localStorage.removeItem("rememberMe");
//                 }
//                 props.history.push("/");
//               } else {
//                 setFormErrorMessage("Check out your Account or Password again");
//               }
//             })
//             .catch((err) => {
//               setFormErrorMessage(err);
//               setTimeout(() => {
//                 setFormErrorMessage("");
//               }, 3000);
//             });
//           setSubmitting(false);
//         }, 500);
//       }}
//     >
//       {(props) => {
//         const {
//           values,
//           touched,
//           errors,
//           dirty,
//           isSubmitting,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           handleReset,
//         } = props;
//         return (
//           <div className="app">
//             <div
//               className="formWrapper"
//               style={{ backgroundColor: "white", padding: "2rem" }}
//             >
//               <Title level={2}>Login </Title>
//               <form
//                 onSubmit={handleSubmit}
//                 style={{ width: "350px" }}
//                 method="POST"
//               >
//                 <Form.Item required>
//                   <Input
//                     id="email"
//                     prefix={<UserOutlined />}
//                     placeholder="Enter your email"
//                     type="email"
//                     value={values.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={
//                       errors.email && touched.email
//                         ? "text-input error"
//                         : "text-input"
//                     }
//                   />
//                   {errors.email && touched.email && (
//                     <div className="input-feedback">{errors.email}</div>
//                   )}
//                 </Form.Item>

//                 <Form.Item required>
//                   <Input
//                     id="password"
//                     prefix={<LockOutlined />}
//                     placeholder="password."
//                     type="password"
//                     value={values.password}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={
//                       errors.password && touched.password
//                         ? "text-input error"
//                         : "text-input"
//                     }
//                   />
//                   {errors.password && touched.password && (
//                     <div className="input-feedback">{errors.password}</div>
//                   )}
//                 </Form.Item>

//                 {formErrorMessage && (
//                   <label>
//                     <p
//                       style={{
//                         color: "#ff0000bf",
//                         fontSize: "0.7rem",
//                         border: "1px solid",
//                         padding: "1rem",
//                         borderRadius: "10px",
//                       }}
//                     >
//                       {formErrorMessage}
//                     </p>
//                   </label>
//                 )}

//                 <Form.Item>
//                   <Checkbox
//                     id="rememberMe"
//                     onChange={handleRememberMe}
//                     checked={rememberMe}
//                   >
//                     Remember me
//                   </Checkbox>
//                   <a
//                     className="login-form-forgot"
//                     href="/reset_password"
//                     style={{ float: "right" }}
//                   >
//                     forgot password
//                   </a>
//                   <div>
//                     <Button
//                       type="primary"
//                       htmlType="submit"
//                       className="login-form-button"
//                       style={{ minWidth: "100%" }}
//                       disabled={isSubmitting}
//                       onSubmit={handleSubmit}
//                     >
//                       Log in
//                     </Button>
//                   </div>
//                   Or <a href="/register">register now!</a>
//                 </Form.Item>
//               </form>
//             </div>
//           </div>
//         );
//       }}
//     </Formik>
//   );
// }

// export default withRouter(LoginPage);
