import * as httpUtil from '../utils/httpUtil';

const API_BASE_URL = 'http://httpstat.us/';

export function getResponse(statusCode) {
  return httpUtil.get(`${API_BASE_URL}/${statusCode}`);
}


