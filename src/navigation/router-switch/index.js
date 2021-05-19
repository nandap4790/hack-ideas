import React from "react";
import { Route, Switch } from "react-router";
import { Home } from "../../home";
import { Employee } from "../../employee";

export const RouteSwitchComponent = () => {
  return <Switch>
    <Route path="/employee">
      <Employee />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
}