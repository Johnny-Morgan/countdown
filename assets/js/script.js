// Function to shuffle contents of an array
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// Function that generates the numbers to play the game
function generateNumbers() {
  const bigNums = [100, 75, 50, 25];
  const smallNums = [
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
  ];
  shuffle(bigNums);
  shuffle(smallNums);
  let numbersPicked = [];

  // User can pick between 0 and 4 big numbers
  let bigNumPick = Math.floor(Math.random() * 5);
  /* The total amount of numbers a user can pick is 6.
    Therefore the number of small numbers is calcualted 
    by subtracting the the amount of big numbers from 6
    */
  let smallNumPick = 6 - bigNumPick;

  for (let i = 0; i < bigNumPick; i++) {
    numbersPicked.push(bigNums.pop());
  }
  for (let i = 0; i < smallNumPick; i++) {
    numbersPicked.push(smallNums.pop());
  }

  console.log(`${smallNumPick} small numbers and ${bigNumPick} big numbers`);
  console.log(numbersPicked);
}

// Test generateNumbers()
generateNumbers();
