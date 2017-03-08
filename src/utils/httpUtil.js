import axios from 'axios';

export function get(url, params = {}) {
  return axios({
    method: 'get',
    url: url,
    params: params
  });
}

export function post(url, data) {
  return axios({
    method: 'post',
    url: url,
    data: data
  });
}

export function put(url, data) {
  return axios({
    method: 'put',
    url: url,
    data: data
  });
}

export function remove(url) {
  return axios({
    method: 'delete',
    url: url
  });
}
