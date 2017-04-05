// Change the notification library as per your need

import 'notie/dist/notie.min.css';

import notie from 'notie';

export function error(message, visibleDuration = 10) {
  notie.alert({
    type: 'error',
    text: message,
    time: visibleDuration
  });
}

export function info(message, visibleDuration = 10) {
  notie.alert({
    type: 'info',
    text: message,
    time: visibleDuration,
  });
}

export function warning(message, visibleDuration = 10, position = 'top') {
  notie.alert({
    type: 'warning',
    text: message,
    time: visibleDuration,
    position: position
  });
}



