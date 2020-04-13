import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
import LayoutHeader from "./LayoutHeader";
import HeaderUserInfo from "./HeaderUserInfo";
import HeaderTitle from "./HeaderTitle";
import LayoutFooter from "./LayoutFooter";

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  position: relative;

  .body-wrapper {
    padding-bottom: 70px;
  }
`;

const GeneralLayout = ({ children }) => {
  const { Content } = Layout;
  return (
    <StyledLayout>
      <LayoutHeader>
        <HeaderTitle />
        <HeaderUserInfo />
      </LayoutHeader>
      <Content className="body-wrapper">{children}</Content>
      <LayoutFooter />
    </StyledLayout>
  );
};

export default GeneralLayout;
