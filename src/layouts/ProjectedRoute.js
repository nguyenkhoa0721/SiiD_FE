import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { AuthenticationContext } from "store/AuthenticationContext";

export const ProtectedRoute = (props) => {
  const { state, update } = useContext(AuthenticationContext);
  useEffect(() => {
    if(window.localStorage.getItem("bearerToken") !== null  && window.localStorage.getItem("bearerToken") !== undefined){
        update({bearerToken: window.localStorage.getItem("bearerToken"), id: window.localStorage.getItem("id"), userName: window.localStorage.getItem("userName")})
    };
    console.log(props.path);
    console.log(props.exact);
  },[]);

  return window.localStorage.getItem("bearerToken") !== null && window.localStorage.getItem("bearerToken") !== undefined ? (
    props.path === '/' && props.exact === true ? <Redirect to="/admin/dashboard" /> :  <Route {...props}/>
  ) : (
    <Redirect to="/auth/signin" />
  );
};
