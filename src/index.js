import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "./layouts/Admin";
import SignUp from "views/Authentication/SignUp";
import SignIn from "views/Authentication/SignIn";
import { AuthenticationProvider } from "store/AuthenticationContext";
import { ProtectedRoute } from "layouts/ProjectedRoute";
ReactDOM.render(
  <HashRouter>
    <Switch>
      <AuthenticationProvider>
        <ProtectedRoute exact path={`/`} />
        <Route path={`/admin`} component={AdminLayout} />
        <Route path={`/auth/signup`} exact={true} component={SignUp} />
        <Route path={`/auth/signin`} exact={true} component={SignIn} />
      </AuthenticationProvider>
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
