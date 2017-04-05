import React from 'react';
import ReactDOM from 'react-dom';

import errorConstants from '../constants/errorConstants';

import * as notificationUtil from './notificationUtil';

import PageNotFound from '../components/commons/PageNotFound';

function _showDefaultNotification() {
  notificationUtil.error(errorConstants.DEFAULT);
}

function _isValidCallback(errorCallBack) {
  return typeof errorCallBack === 'function';
}

function _handleError(errorResponse, statusCode, errorCallbacks) {
  if (statusCode === 404) {
    ReactDOM.render(<PageNotFound/>, document.getElementById('app-container'));
    return;
  }
  if (errorCallbacks && _isValidCallback(errorCallbacks[statusCode])) {
    errorCallbacks[statusCode](errorResponse);
    return;
  }
  if (errorConstants[statusCode]) {
    notificationUtil.error(errorConstants[statusCode]);
    return;
  }

  _showDefaultNotification();
}

function _printStacktrace(err) {
  console.error(err);
}

/**
 * Use this handler to catch errors every time you perform a network request.
 * @param {Object} error
 * @param {Object} errorCallbacks
 * @param {requestCallback} errorCallbacks.HTTP_STATUS_CODE
 */
export default function errorHandler(error, errorCallbacks) {
  if (process.env.NODE_ENV === 'development') {
    _printStacktrace(error);
  }

  if (error.response) {
    let statusCode = error.response.status;

    if (statusCode) {
      _handleError(error.response, statusCode, errorCallbacks);
      return;
    }
    if (_isValidCallback(errorCallbacks['DEFAULT'])) {
      errorCallbacks['DEFAULT'](error.response);
      return;
    }
  }

  _showDefaultNotification();
}
