import React from "react";
import moment from "moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import CommonFormBlock from "../../common/CommonFormBlock";
import CommonInput from "../../common/CommonInput";
import CommonButton from "../../common/CommonButton";

import { Form } from "antd";
import { Helmet } from "react-helmet";

const RegisterPageBlock = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #828f76;
`;

const StyledForm = styled(Form)`
  width: 100%;
`;

const RegisterPage = (props) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: "",
        lastName: "",
        name: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password,
            name: values.name,
            lastname: values.lastname,
            image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`,
          };

          dispatch(registerUser(dataToSubmit)).then((response) => {
            if (response.payload.success) {
              props.history.push("/login");
            } else {
              alert(response.payload.err.errmsg);
            }
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
          <RegisterPageBlock>
            <Helmet>
              <title>YTHFT - Sign Up</title>
            </Helmet>
            <CommonFormBlock>
              <h1>SIGN UP</h1>
              <StyledForm onSubmit={handleSubmit}>
                <Form.Item required>
                  <CommonInput
                    id="name"
                    placeholder="Enter your First-name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.name && touched.name
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                </Form.Item>

                <Form.Item required>
                  <CommonInput
                    id="lastName"
                    placeholder="Enter your Last-name"
                    type="text"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.lastName && touched.lastName
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                </Form.Item>

                <Form.Item required hasFeedback>
                  <CommonInput
                    id="email"
                    placeholder="Enter your Email"
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

                <Form.Item required hasFeedback>
                  <CommonInput
                    id="password"
                    placeholder="Enter your password"
                    type="password"
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

                <Form.Item required hasFeedback>
                  <CommonInput
                    id="confirmPassword"
                    placeholder="Enter your confirmPassword"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                </Form.Item>

                <Form.Item>
                  <CommonButton onClick={handleSubmit} disabled={isSubmitting}>
                    SIGN UP
                  </CommonButton>
                </Form.Item>
              </StyledForm>
            </CommonFormBlock>
          </RegisterPageBlock>
        );
      }}
    </Formik>
  );
};

export default RegisterPage;
