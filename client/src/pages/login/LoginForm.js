import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import * as actions from "../../actions/user";

const StyledLoginButton = styled(Button)`
  width: 100%;
`;

const StyledRegisterLinkContainer = styled.div`
  text-align: right;
`;

const LoginForm = () => {
  const userNameRef = useRef(null);
  const userLoggedIn = useSelector((store) => store.user.loggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  const onFinish = ({ email, password }) => {
    dispatch(actions.login(email, password));
  };

  return (
    <>
      {userLoggedIn && <Redirect to="/" />}
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor, ingresá tu email.",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            ref={userNameRef}
          />
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
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Olvidé mi password
          </a>
        </Form.Item>

        <Form.Item>
          <StyledLoginButton
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Iniciar sesión
          </StyledLoginButton>
        </Form.Item>
        <StyledRegisterLinkContainer>
          <Link to="/register">Registrarse</Link>
        </StyledRegisterLinkContainer>
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

export default LoginForm;
