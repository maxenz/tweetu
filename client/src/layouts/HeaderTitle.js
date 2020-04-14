import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/images/twitter.svg";

const StyledHeaderTitle = styled.div`
  display: flex;
  flex: 1;

  h3 {
    margin-right: 5%;
    a {
      color: white;
      font-family: Inconsolata;
    }
  }

  a {
    color: white;
  }
`;

const HeaderUserTitle = () => {
  const loggedIn = useSelector((store) => store.user.loggedIn);
  return (
    <StyledHeaderTitle>
      <div>
        <img src={logo} style={{ height: "40px", paddingRight: "10px" }} />
      </div>

      <h3>
        <Link to="/">Tweetu</Link>
      </h3>
      {loggedIn && (
        <Link style={{ paddingTop: "3px" }} to="/configuration">
          Configuración
        </Link>
      )}
    </StyledHeaderTitle>
  );
};

export default HeaderUserTitle;
