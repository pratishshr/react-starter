import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import routeConstants from './constants/routeConstants';

import * as reactRouterUtil from './utils/reactRouterUtil';

import App from './components/App';
import Home from './components/home';
import PageNotFound from './components/commons/PageNotFound';

reactRouterUtil.scrollOnRouteChange(browserHistory);

const routes = (
  <Router history={browserHistory}>
    <Route path={routeConstants.HOME} component={App}>
      <IndexRoute component={Home}/>
    </Route>
    <Route path="*" component={PageNotFound}/>
  </Router>
);

export default routes;
