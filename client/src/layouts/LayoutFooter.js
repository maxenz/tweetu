import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { LightBlue } from "../utils/colors";
const { Footer } = Layout;

const StyledLayoutFooter = styled(Footer)`
  background-color: ${LightBlue};
  color: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const LayoutFooter = () => {
  return (
    <StyledLayoutFooter>
      Tweetu © - {new Date().getFullYear()}. Todos los derechos reservados
    </StyledLayoutFooter>
  );
};

export default LayoutFooter;
