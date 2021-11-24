import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "./layouts/Auth";
import AdminLayout from "./layouts/Admin";
import SignUp from "views/Pages/SignUp";
import SignIn from "views/Pages/SignIn";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />
      <Route path={`/auth/signup`} component={SignUp} />
      <Route path={'/auth/signin'} component={SignIn} />
      <Redirect from={`/`} to="/admin/dashboard" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
