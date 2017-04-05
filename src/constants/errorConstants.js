// Add more error status codes as the requirement of the app
const errorConstants = {
  DEFAULT: 'Oops! Something went wrong',
  504: 'Hmm! Looks like the server is taking too long to respond. Please try again later.',
  503: 'The server is currently unavailable or down for maintenance. Please try again later.',
  500: 'Oh no! Something went wrong with the server. Please come back later when we fixed this problem. Thanks.'
};

export default errorConstants;
