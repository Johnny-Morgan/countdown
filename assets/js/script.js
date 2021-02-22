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
function generateNumbers(noOfBigNums) {
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

  /* User can pick between 0 and 4 big numbers
    The total amount of numbers a user can pick is 6.
    Therefore the number of small numbers is calcualted 
    by subtracting the the amount of big numbers from 6
    */
  let noOfsmallNums = 6 - noOfBigNums;

  for (let i = 0; i < noOfBigNums; i++) {
    numbersPicked.push(bigNums.pop());
  }
  for (let i = 0; i < noOfsmallNums; i++) {
    numbersPicked.push(smallNums.pop());
  }

  let numbers = document.querySelectorAll(".cell span");
  numbers.forEach((num) => {
    num.innerHTML = numbersPicked.shift();
  });
}

/* 
  Function that generates the target number 
  The target number must be between 100 and 999
*/
function generateTarget() {
  targetNumber = Math.floor(Math.random() * 900) + 100;
  document.querySelector(".target-num").innerHTML = targetNumber;
}

const range = document.getElementById("range");
// At the start of the game, the range is set to 2
let value = 2;
range.addEventListener("input", (e) => {
  value = +e.target.value;
  const label = e.target.nextElementSibling;
  let message = "";
  switch (value) {
    case 0:
      message = "6 small";
      break;
    case 1:
      message = "1 large & 5 small";
      break;
    case 2:
      message = "2 large & 4 small";
      break;
    case 3:
      message = "3 large & 3 small";
      break;
    case 4:
      message = "4 large & 2 small";
      break;
  }
  label.innerHTML = message;
});

document.getElementById("play").addEventListener("click", () => {
  generateNumbers(value);
  generateTarget();
});
