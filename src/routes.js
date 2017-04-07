import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routeConstants from './constants/routeConstants';

import Home from './components/home';
import PageNotFound from './components/commons/PageNotFound';

const baseHref = process.env.BASE_HREF || '/';

const Router = () => (
  <BrowserRouter basename={baseHref}>
    <div className="container">
      <Switch>
        <Route exact path={routeConstants.HOME} component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
