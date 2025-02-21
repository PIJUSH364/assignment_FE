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

export const dateFormatter = (date = new Date()) => {
  return new Date(date)
    .toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(",", "");
};

export const Role = ["Member", "Admin"];
export const Status = ["Active", "InActive"];
