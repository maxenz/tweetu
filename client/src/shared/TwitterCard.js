import React from "react";
import styled from "styled-components";
import { LightBlue } from "../utils/colors";
import useHover from "../hooks/useHover";

const StyledTwitterCard = styled.div`
  header {
    display: block;
    overflow: hidden;
    position: relative;
    padding-bottom: 2em;
    -moz-border-radius-topleft: 8px;
    -webkit-border-top-left-radius: 8px;
    border-top-left-radius: 8px;
    -moz-border-radius-topright: 8px;
    -webkit-border-top-right-radius: 8px;
    border-top-right-radius: 8px;
  }

  .container {
    margin: 3em auto 1em auto;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
    border-radius: 8px;
    padding-bottom: 1.5em;
    background-color: #dde1e2;
    -webkit-box-shadow: #bdc3c7 0 5px 5px;
    -moz-box-shadow: #bdc3c7 0 5px 5px;
    box-shadow: #bdc3c7 0 5px 5px;
  }

  .bg {
    border-bottom: 8px solid #5cc0ff;
    max-height: 180px;
  }

  .bio:hover > .desc {
    cursor: pointer;
    opacity: 1;
  }

  .avatarcontainer {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 70px;
    height: 70px;
    display: block;
  }
  .avatarcontainer:hover > .hover {
    opacity: 1;
  }

  .avatar {
    width: 100%;
    border: 8px solid #5cc0ff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
  }
  .avatar img {
    width: 65px;
    height: 65px;
  }
  .avatar:hover + .hover {
    opacity: 1;
    cursor: pointer;
  }

  .hover {
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-color: #3498db;
    top: 0;
    font-size: 1.8em;
    text-align: center;
    color: white;
    padding-top: 18%;
    opacity: 0;
    font-weight: 300;
    border: 8px solid #5cc0ff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    -webkit-transition-property: all;
    -moz-transition-property: all;
    -o-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: 0.5s;
    -moz-transition-duration: 0.5s;
    -o-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease;
    -moz-transition-timing-function: ease;
    -o-transition-timing-function: ease;
    transition-timing-function: ease;
  }

  .data {
    margin-top: 0.6em;
    color: #81878b;
  }
  .data li {
    width: 32%;
    text-align: center;
    display: inline-block;
    font-size: 1.5em;
    border-right: solid 1px #bdc3c7;
  }
  .data li:last-child {
    border: none;
  }
  .data li span {
    display: block;
    text-transform: uppercase;
    font-size: 0.5em;
    margin-top: 0.6em;
    font-weight: 700;
  }

  .desc {
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 171px;
    padding: 1.2em 1em 0 1em;
    color: white;
    text-align: center;
    opacity: 0;
    -webkit-transition-property: all;
    -moz-transition-property: all;
    -o-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: 0.3s;
    -moz-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-in;
    -moz-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
  }
  .desc h3 {
    font-size: 1.2em;
    margin-bottom: 0.5em;
    color: white;
  }
  .desc p {
    font-size: 0.9em;
    line-height: 1.5em;
  }
`;

const StyledButton = styled.div`
  margin: 1.5em auto 0 auto;
  background-color: ${LightBlue};
  width: 150px;
  color: white;
  text-align: center;
  padding: 0.5em;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
  -webkit-transition-property: all;
  -moz-transition-property: all;
  -o-transition-property: all;
  transition-property: all;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease;
  -moz-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease;

  &:hover {
    background-color: #167abd;
    cursor: pointer;
  }
`;

const StyledButtonFollowing = styled(StyledButton)`
  background-color: ${LightBlue};
  color: white;

  &:hover {
    background-color: #ff4d4f;
  }
`;

const StyledButtonNotFollowing = styled(StyledButton)`
  background-color: white;
  color: ${LightBlue};

  &:hover {
    background-color: #e6f7ff;
  }
`;

const defaultBackground = "https://abs.twimg.com/images/themes/theme1/bg.png";

const TwitterCard = ({ account, onFavouriteAccount, favourited }) => {
  const [hoverRef, isHovered] = useHover();

  const getButtonText = () => {
    if (!favourited) {
      return "Seguir";
    } else if (!isHovered) {
      return "Siguiendo";
    }

    return "Dejar de seguir";
  };

  return (
    <StyledTwitterCard>
      <div className="container">
        <header>
          <div className="bio">
            <img
              src={
                account.profile_banner_url ||
                account.profile_background_image_url_https ||
                defaultBackground
              }
              alt="background"
              className="bg"
            />
            <div className="desc">
              <h3>{account.screen_name}</h3>
              <p>{account.description}</p>
            </div>
          </div>

          <div className="avatarcontainer">
            <img
              src={account.profile_image_url_https}
              alt="avatar"
              className="avatar"
            />
            <div className="hover">
              <div className="icon-twitter"></div>
            </div>
          </div>
        </header>

        <div className="content">
          <div className="data">
            <ul>
              <li>
                {account.statuses_count}
                <span>Tweets</span>
              </li>
              <li>
                {account.followers_count}
                <span>Seguidores</span>
              </li>
              <li>
                {account.friends_count}
                <span>Siguiendo</span>
              </li>
            </ul>
          </div>

          {favourited ? (
            <StyledButtonFollowing ref={hoverRef} onClick={onFavouriteAccount}>
              {getButtonText()}
            </StyledButtonFollowing>
          ) : (
            <StyledButtonNotFollowing onClick={onFavouriteAccount}>
              {getButtonText()}
            </StyledButtonNotFollowing>
          )}
        </div>
      </div>
    </StyledTwitterCard>
  );
};

export default TwitterCard;
