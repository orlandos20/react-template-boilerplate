import React from "react";
import HomePage from "./src/components/HomePage";
import { Route, Switch } from "react-router-dom";

export const INITIAL_URI = "/";

const routes = (
  <React.Fragment>
    <Switch>
      <Route exact path={INITIAL_URI} component={HomePage} />

      <Route render={() => <div>Oops! the page doesn´t exist.</div>} />
    </Switch>
  </React.Fragment>
);

export default routes;
