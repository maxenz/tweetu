import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { LightBlue } from "../utils/colors";
const { Header } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  background-color: ${LightBlue};
`;

const LayoutHeader = ({ children }) => <StyledHeader> {children} </StyledHeader>;

export default LayoutHeader;
