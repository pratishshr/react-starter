import React  from 'react';
import { Route, Redirect } from 'react-router-dom';

import routeConstants from '../../constants/routeConstants';

import ErrorHandling from './error-handling';

const Routes = () => {
  return (
    <div id="page-content-wrapper">
      <div className="container-fluid">
        <div className="row">
          {/* TODO: Add documentation in GUIDES page and remove redirect */}
          <Route path={routeConstants.GUIDES} render={() => <Redirect to={routeConstants.ERROR_HANDLING}/>}/>
          <Route path={routeConstants.ERROR_HANDLING} component={ErrorHandling}/>
        </div>
      </div>
    </div>
  );
};

export default Routes;
