import React from "react";
import { Route, Switch } from "react-router";

export const RouteSwitchComponent = () => {
  return <Switch>
    <Route path="/employee">
      <h1>employee page</h1>
    </Route>
    <Route path="/">
      <h1>homepage</h1>
    </Route>
  </Switch>
}