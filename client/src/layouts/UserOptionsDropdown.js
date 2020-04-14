import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Dropdown } from "antd";
import { Redirect } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import * as actions from "../actions/user";

const UserOptionsDropdown = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((store) => store.user.loggedIn);
  const user = useSelector((store) => store.user.userInfo);
  const fullName = user && `${user.name} ${user.lastName}`;

  const logout = (e) => {
    e.preventDefault();
    dispatch(actions.logout());
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={logout}>Cerrar sesión</a>
      </Menu.Item>
    </Menu>
  );

  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        {fullName} <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default UserOptionsDropdown;
