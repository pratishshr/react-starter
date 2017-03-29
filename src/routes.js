import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routeConstants from './constants/routeConstants';

import Home from './components/home';
import PageNotFound from './components/commons/PageNotFound';

const baseHref = process.env.BASE_HREF || '/';

const routes = (
  <Router basename={baseHref}>
    <div className="container">
      <Switch>
        <Route path={routeConstants.HOME} exact component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);

export default routes;
