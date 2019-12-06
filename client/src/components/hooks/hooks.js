import React, { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
    
    const store = window.localStorage
    const [storedValue, setStoredValue] = useState(() => {
      const item = store.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });
    const setToStored = function (value) {
      setStoredValue(value);
      store.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setToStored];
  };
