import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { Form, Input, Button } from "antd";
import * as actions from "../../actions/user";
import ErrorMessage from "../../shared/ErrorMessage";

const StyledRegisterButton = styled(Button)`
  width: 100%;
`;

const RegisterForm = () => {
  const userNameRef = useRef(null);
  const userLoggedIn = useSelector((store) => store.user.loggedIn);
  const registerError = useSelector((store) => store.user.registerError);
  const dispatch = useDispatch();

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  const onFinish = (user) => {
    dispatch(actions.register(user));
  };

  return (
    <>
      {userLoggedIn && <Redirect to="/" />}
      <Form
        name="normal_register"
        className="register-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Por favor, ingresá tu nombre.",
            },
          ]}
        >
          <Input placeholder="Nombre" ref={userNameRef} />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[
            {
              required: true,
              message: "Por favor, ingresá tu apellido.",
            },
          ]}
        >
          <Input placeholder="Apellido" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor, ingresá tu email.",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Por favor, ingresá tu password.",
            },
          ]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <StyledRegisterButton
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Registrarse
          </StyledRegisterButton>
        </Form.Item>
        {registerError && (
          <ErrorMessage>
            {registerError.message}
          </ErrorMessage>
        )}

        <input
          type="password"
          name="whatever"
          autoComplete="new-password"
          style={{ display: "none" }}
        />
      </Form>
    </>
  );
};

export default RegisterForm;
