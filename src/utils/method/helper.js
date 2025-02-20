import axios from "axios";

// Custom debounce function with cancel token
export const debounce = (func, delay) => {
  let timeoutId;
  let cancelTokenSource;

  return (...args) => {
    // Cancel the previous request if a new one is initiated
    if (cancelTokenSource) {
      cancelTokenSource.cancel("Operation canceled due to new request.");
    }

    clearTimeout(timeoutId);
    cancelTokenSource = axios.CancelToken.source();

    timeoutId = setTimeout(() => {
      func(...args, cancelTokenSource);
    }, delay);
  };
};
