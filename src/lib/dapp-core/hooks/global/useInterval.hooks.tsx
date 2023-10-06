import * as React from 'react';

export function useInterval(callback: () => any, delay: number) {
  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    // @ts-ignore
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      // @ts-ignore
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
