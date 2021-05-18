import React from "react";
import { Route, Switch } from "react-router";
import { Home } from "../../home";

export const RouteSwitchComponent = () => {
  return <Switch>
    <Route path="/employee">
      <h1>employee page</h1>
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
}