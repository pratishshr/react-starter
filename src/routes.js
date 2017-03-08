import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { scrollOnRouteChange, addBaseName } from './utils/reactRouterUtil';

import routeConstants from './constants/routeConstants';

import App from './components/App';
import Home from './components/home';
import PageNotFound from './components/commons/PageNotFound';

const history = addBaseName(browserHistory, process.env.BASE_HREF || '/');
scrollOnRouteChange(history);

const routes = (
  <Router history={history}>
    <Route path={routeConstants.HOME} component={App}>
      <IndexRoute component={Home}/>
    </Route>
    <Route path="*" component={PageNotFound}/>
  </Router>
);

export default routes;
