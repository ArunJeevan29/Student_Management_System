import { useState, useCallback } from 'react';

/**
 * A custom hook for toggling a boolean state.
 * @param {boolean} initialState - The initial state value (default: false)
 * @returns {[boolean, function, function, function]} - [state, toggle, setTrue, setFalse]
 */
export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((prev) => !prev), []);
  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);

  return [state, toggle, setTrue, setFalse];
};
