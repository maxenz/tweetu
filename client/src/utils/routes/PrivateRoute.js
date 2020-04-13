import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import API from "../../api";
import * as actions from "../../actions/user";
import * as auth from "../../helpers/auth";

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const [isAllowed, setIsAllowed] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const { data, status } = await API.user.checkValidToken();        
        dispatch(actions.setUserInfo(data.user));
        setIsAllowed(status === 200);
      } catch (e) {
        auth.removeTokenFromLocalStorage();
        setIsAllowed(false);
      }
    };
    checkToken();
  }, []);

  const goToLogin = () => (
    <Redirect to={{ pathname: "/login", state: { from: rest.location } }} />
  );

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          {isAllowed === null ? null : isAllowed ? (
            <Component {...props} />
          ) : (
            goToLogin()
          )}
        </Layout>
      )}
    />
  );
};

export default PrivateRoute;
