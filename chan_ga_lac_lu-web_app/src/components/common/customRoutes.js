import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import {isAuthenticated} from "../../utils/utils";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (
    <>
      {isAuthenticated() ? (
        <Route
          {...rest}
          render={(props) => (
            <Component {...props}></Component>
          )}
        ></Route>
      ) : (
        <Redirect to="/login"></Redirect>
      )}
    </>
  );
};

export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Header></Header>
          <div className="clearfix" />
          <div className="content">
            <Component {...props}></Component>
          </div>
          <Footer></Footer>
        </>
      )}
    ></Route>
  );
};

export const LoginRoute = ({ component: Component, ...rest }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (
    <>
      {token == null ? (
        <Route
          {...rest}
          render={(props) => (
            <>
              <Header></Header>
              <div className="clearfix" />
              <div className="content">
                <Component {...props}></Component>
              </div>
              <Footer></Footer>
            </>
          )}
        ></Route>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </>
  );
};
