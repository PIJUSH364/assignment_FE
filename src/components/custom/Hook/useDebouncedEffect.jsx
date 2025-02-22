
import React, { useEffect } from "react";
export const useDebouncedEffect = (callback, dependencies, delay = 500) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => clearTimeout(handler);
  }, [...dependencies, delay]);
};