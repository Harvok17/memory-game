import React from 'react';

const Modal = ({ gameOver, resetGame }) => {
  return gameOver ? (
    <div className="modal-overlay">
      <div className="modal">
        <p>Congratulations! You're a Genius!</p>
        <button onClick={resetGame}>Play Again</button>
      </div>
    </div>
  ) : null;
};

export default Modal;
