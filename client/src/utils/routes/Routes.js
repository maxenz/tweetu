import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ConfigurationPage from "../../pages/configuration/ConfigurationPage";
import HomePage from "../../pages/home/HomePage";
import RouteWrapper from "./RouterWrapper";
import PrivateRoute from "./PrivateRoute";
import GeneralLayout from "../../layouts/GeneralLayout";
import LoginPage from "../../pages/login/LoginPage";
import RegisterPage from "../../pages/register/RegisterPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute
          path="/configuration"
          component={ConfigurationPage}
          layout={GeneralLayout}
        />
        <RouteWrapper
          path="/login"
          component={LoginPage}
          layout={GeneralLayout}
        />
        <RouteWrapper
          path="/register"
          component={RegisterPage}
          layout={GeneralLayout}
        />
        <PrivateRoute path="/" component={HomePage} layout={GeneralLayout} />
      </Switch>
    </Router>
  );
};

export default Routes;
