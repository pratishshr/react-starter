import React, { Component } from 'react';

import reactLogo from '../../../public/images/react-logo.png';

class PageNotFound extends Component {

  render() {
    return (
      <div className="not-found-container">
        <div className="logo-container">
          <img src={reactLogo} alt="react-logo"/>
        </div>
        <div className="not-found-status">404</div>
        <div className="not-found-message">Page Not Found</div>
      </div>
    );
  }

}

export default PageNotFound;
