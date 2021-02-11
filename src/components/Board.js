import React, { useEffect, useState } from 'react';

const Board = ({ characters, handleClick, currentScore }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timerId = setTimeout(() => setAnimate(false), 550);

    return () => clearTimeout(timerId);
  }, [currentScore]);

  const renderedList = characters.map(character => {
    return (
      <div
        key={character.id}
        className={`tile ${animate ? 'flip' : ''}`}
        onClick={() => handleClick(character)}
      >
        <div className="card">
          <div className="card__img">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="card__name">{character.name}</div>
        </div>
      </div>
    );
  });

  return <div className="container">{renderedList}</div>;
};

export default Board;
