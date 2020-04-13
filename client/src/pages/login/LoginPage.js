import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import { getTokenFromLocalStorage } from "../../helpers/auth";

const StyledLoginContainer = styled(Row)`
  padding: 20px 0;
  position: absolute;
  top: 35%;
  right: 0;
  left: 0;
`;

const LoginPage = () => {
  if (getTokenFromLocalStorage()) {
    return <Redirect to="/" />;
  }
  return (
    <StyledLoginContainer>
      <Col
        xs={{ span: 20, offset: 2 }}
        sm={{ span: 10, offset: 7 }}
        lg={{ span: 6, offset: 9 }}
      >
        <LoginForm />
      </Col>
    </StyledLoginContainer>
  );
};

export default LoginPage;
