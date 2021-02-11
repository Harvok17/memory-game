import { useState, useEffect } from 'react';

export default location => {
  const [currentPath, setCurrentPath] = useState(location);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath;
};
