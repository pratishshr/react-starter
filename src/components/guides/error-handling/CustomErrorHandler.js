/**
 * @author Pratish Shrestha <pratishshrestha@lftechnology.com>
 */

import React, { Component } from 'react';

import Prism from 'prismjs';

import * as httpStatusService  from '../../../services/httpStatusService';

import errorHandler from '../../../utils/errorHandler';

const exampleCode = `import errorHandler from 'utils/errorHandler';

try {
  let response = await httpStatusService.getResponse(statusCode);
} catch (e) {
  errorHandler(e, {
    400: (errorResponse) => {
      this.setState({ customError: errorResponse.data });
    },
    409: (errorResponse) => {
      this.setState({ customError: errorResponse.data });
    },
    500: (errorResponse) => {
      // Override the existing implementation
      this.setState({ customError: 'I\\'m taking in charge of this.' });
    }
  });
}`;

class CustomErrorHandler extends Component {

  constructor() {
    super();
    this.state = {
      customError: 'Perform a network request by pressing one of the above buttons.'
    };
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  async getErrorResponse(statusCode) {
    try {
      await httpStatusService.getResponse(statusCode);
    } catch (e) {
      errorHandler(e, {
        400: (errorResponse) => {
          this.setState({ customError: errorResponse.data });
        },
        409: (errorResponse) => {
          this.setState({ customError: errorResponse.data });
        },
        500: (errorResponse) => {
          this.setState({ customError: 'I\'m taking in charge of this.' });
        }
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Custom Handlers</h1>
        <p>
          Most of the time, you would want to handle errors with your own custom functions.
          <br/>
          For example: Showing errors on a bad form request.
          <br/>
          Or, override the existing functionality
          <br/>
          <b>errorHandler</b> takes in an object of callbacks with status codes as the key name as the second parameter.
          <br/>
        </p>
        <h2>Example</h2>
        <pre>
          <code className="language-javascript">
            {exampleCode}
          </code>
        </pre>
        <h2>Try it out</h2>
        <p>Press the buttons below to make a network request with the marked status codes as the response</p>
        <p>Status Codes:</p>
        <div className="button-list">
          <button
            className="btn btn-danger"
            onClick={() => {this.getErrorResponse(400);}}>
            Status: 400
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {this.getErrorResponse(409);}}>
            Status: 409
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {this.getErrorResponse(500);}}>
            Status: 500
          </button>
        </div>
        <div className="error-wrapper">
          Error message: <span className="color-red">{this.state.customError}</span>
        </div>
      </div>
    );
  }

}

export default CustomErrorHandler;
