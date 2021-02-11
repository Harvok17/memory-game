import React from 'react';

const Instruction = () => {
  return (
    <div className="instruction">
      <h1>Memory Game</h1>
      <p>
        This application puts your memory to the test. You are presented with
        multiple images of Rick and Morty characters. The images get shuffled
        every-time they are clicked. You <strong>CAN NOT</strong> click on any
        image more than once or else your score resets to zero. The main
        objective is to get the highest score as possible or beat the game.
      </p>
    </div>
  );
};

export default Instruction;
