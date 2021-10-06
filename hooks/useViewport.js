import { useState, useEffect } from 'react';

export default function useViewport() {
  const [viewport, setViewport] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      let newViewport = 'md';
      if (window.innerWidth >= 1024) newViewport = 'xl';
      else if (window.innerWidth >= 600) newViewport = 'lg';
      setViewport(newViewport);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { viewport };
}
