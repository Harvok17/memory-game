import React from 'react';
import Link from './Link';
import usePath from './usePath';

const Header = ({ bestScore }) => {
  const currentPath = usePath(window.location.pathname);
  const menu = [
    { label: 'Memory Game', path: '/memory-game/' },
    { label: 'How To Play', path: '/instruction' },
  ];

  return (
    <header className="header">
      <div className="header__menu">
        <ul className="header__items">
          {menu.map(({ label, path }, index) => {
            const selected =
              path === currentPath ? 'header__item--selected' : '';
            return (
              <li key={index} className={`header__item ${selected}`}>
                <Link href={path}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="header__score">Best Score: {bestScore}</div>
    </header>
  );
};

export default Header;
