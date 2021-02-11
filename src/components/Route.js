import usePath from './usePath';

const Route = ({ path, children }) => {
  const currentPath = usePath(window.location.pathname);

  return currentPath === path ? children : null;
};

export default Route;
