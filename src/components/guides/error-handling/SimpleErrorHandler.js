import React, { Component } from 'react';

import Prism from 'prismjs';

import * as httpStatusService  from '../../../services/httpStatusService';

import errorHandler from '../../../utils/errorHandler';

const exampleCode = `import errorHandler from 'utils/errorHandler';

try {
  let response = await httpStatusService.getResponse(statusCode);
} catch (e) {
  errorHandler(e);
}`;


class SimpleErrorHandler extends Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  async getErrorResponse(statusCode) {
    try {
      await httpStatusService.getResponse(statusCode);
    } catch (e) {
      errorHandler(e);
    }
  }

  render() {
    return (
      <div>
        <h1>Error Handling</h1>
        <p>
          A generic error handler is provided and should be used every time you perform a network request.
          <br/>
          It handles most of the common http errors that you might get.
          <br/>
          You can add others as per your requirement in
          <a
            target="_blank"
            href="https://github.com/pratishshr/react-starter/blob/master/src/constants/errorConstants.js"
          > errorConstants </a>.
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
            onClick={() => {this.getErrorResponse(504);}}>
            Status: 504
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {this.getErrorResponse(503);}}>
            Status: 503
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {this.getErrorResponse(500);}}>
            Status: 500
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {this.getErrorResponse(502);}}>
            Status: Anything else
          </button>
        </div>
      </div>
    );
  }

}

export default SimpleErrorHandler;
