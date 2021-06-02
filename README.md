# Memory Game

This application puts your memory to the test. You are presented with multiple images of Rick and Morty characters. The images get shuffled every-time they are clicked. You CAN NOT click on any image more than once or else your score resets to zero. The main objective is to get the highest score as possible or beat the game.

### Goal of this project

- Use lifecycle methods and React hooks such as useState and useEffect.

### What I've learned

- Different uses of useEffect hook.
- Shuffle array

```javascript
const shuffleArray = array => {
  const arr = [...array];
  let currentIndex = arr.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  return arr;
};
```

### Built With:

- React
- [Rick and Morty API](https://rickandmortyapi.com/)

### Live DEMO:

[Memory Game](https://harvok17.github.io/memory-game/)
