import React from "react";
import styled from "styled-components";
import UserOptionsDropdown from "./UserOptionsDropdown";

const StyledHeaderUserInfo = styled.div`
  display: flex;
  h4,
  a {
    margin-right: 1rem;
    color: white;
  }
`;

const HeaderUserInfo = () => (
  <StyledHeaderUserInfo>
    <UserOptionsDropdown />
  </StyledHeaderUserInfo>
);

export default HeaderUserInfo;
