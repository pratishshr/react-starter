import React, { Component } from 'react';

import SimpleErrorHandler from './SimpleErrorHandler';
import CustomErrorHandler from './CustomErrorHandler';

class ErrorHandler extends Component {

  render() {
    return (
      <div className="col-lg-12">
        <SimpleErrorHandler/>
        <CustomErrorHandler/>
      </div>
    );
  }

}

export default ErrorHandler;
