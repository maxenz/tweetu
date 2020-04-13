import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

const StyledHeaderTitle = styled.div`
  flex: 1;

  h2 {
    a {
      color: white;
      font-family: Inconsolata;
    }
  }
`;

const HeaderUserTitle = () => (
  <StyledHeaderTitle>
    <h2>
      <Link to="/">Tweetu</Link>
    </h2>
  </StyledHeaderTitle>
);

export default HeaderUserTitle;
