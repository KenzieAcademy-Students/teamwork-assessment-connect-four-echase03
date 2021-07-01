"use strict";
// Your Code Here.

//Just make a function to remove all the animation classes from the btns
const clearClasses = function () {
  btnOne.classList.remove("ball-one-black");
  btnOne.classList.remove("ball-two-black");
  btnOne.classList.remove("ball-three-black");
  btnOne.classList.remove("ball-four-black");
  btnOne.classList.remove("ball-five-black");
  btnOne.classList.remove("ball-six-black");
  btnOne.classList.remove("ball-one-red");
  btnOne.classList.remove("ball-two-red");
  btnOne.classList.remove("ball-three-red");
  btnOne.classList.remove("ball-four-red");
  btnOne.classList.remove("ball-five-red");
  btnOne.classList.remove("ball-six-red");

  btnTwo.classList.remove("ball-one-black");
  btnTwo.classList.remove("ball-two-black");
  btnTwo.classList.remove("ball-three-black");
  btnTwo.classList.remove("ball-four-black");
  btnTwo.classList.remove("ball-five-black");
  btnTwo.classList.remove("ball-six-black");
  btnTwo.classList.remove("ball-one-red");
  btnTwo.classList.remove("ball-two-red");
  btnTwo.classList.remove("ball-three-red");
  btnTwo.classList.remove("ball-four-red");
  btnTwo.classList.remove("ball-five-red");
  btnTwo.classList.remove("ball-six-red");

  btnThree.classList.remove("ball-one-black");
  btnThree.classList.remove("ball-two-black");
  btnThree.classList.remove("ball-three-black");
  btnThree.classList.remove("ball-four-black");
  btnThree.classList.remove("ball-five-black");
  btnThree.classList.remove("ball-six-black");
  btnThree.classList.remove("ball-one-red");
  btnThree.classList.remove("ball-two-red");
  btnThree.classList.remove("ball-three-red");
  btnThree.classList.remove("ball-four-red");
  btnThree.classList.remove("ball-five-red");
  btnThree.classList.remove("ball-six-red");

  btnFour.classList.remove("ball-one-black");
  btnFour.classList.remove("ball-two-black");
  btnFour.classList.remove("ball-three-black");
  btnFour.classList.remove("ball-four-black");
  btnFour.classList.remove("ball-five-black");
  btnFour.classList.remove("ball-six-black");
  btnFour.classList.remove("ball-one-red");
  btnFour.classList.remove("ball-two-red");
  btnFour.classList.remove("ball-three-red");
  btnFour.classList.remove("ball-four-red");
  btnFour.classList.remove("ball-five-red");
  btnFour.classList.remove("ball-six-red");

  btnFive.classList.remove("ball-one-black");
  btnFive.classList.remove("ball-two-black");
  btnFive.classList.remove("ball-three-black");
  btnFive.classList.remove("ball-four-black");
  btnFive.classList.remove("ball-five-black");
  btnFive.classList.remove("ball-six-black");
  btnFive.classList.remove("ball-one-red");
  btnFive.classList.remove("ball-two-red");
  btnFive.classList.remove("ball-three-red");
  btnFive.classList.remove("ball-four-red");
  btnFive.classList.remove("ball-five-red");
  btnFive.classList.remove("ball-six-red");

  btnSix.classList.remove("ball-one-black");
  btnSix.classList.remove("ball-two-black");
  btnSix.classList.remove("ball-three-black");
  btnSix.classList.remove("ball-four-black");
  btnSix.classList.remove("ball-five-black");
  btnSix.classList.remove("ball-six-black");
  btnSix.classList.remove("ball-one-red");
  btnSix.classList.remove("ball-two-red");
  btnSix.classList.remove("ball-three-red");
  btnSix.classList.remove("ball-four-red");
  btnSix.classList.remove("ball-five-red");
  btnSix.classList.remove("ball-six-red");

  btnSeven.classList.remove("ball-one-black");
  btnSeven.classList.remove("ball-two-black");
  btnSeven.classList.remove("ball-three-black");
  btnSeven.classList.remove("ball-four-black");
  btnSeven.classList.remove("ball-five-black");
  btnSeven.classList.remove("ball-six-black");
  btnSeven.classList.remove("ball-one-red");
  btnSeven.classList.remove("ball-two-red");
  btnSeven.classList.remove("ball-three-red");
  btnSeven.classList.remove("ball-four-red");
  btnSeven.classList.remove("ball-five-red");
  btnSeven.classList.remove("ball-six-red");
};

const hideBtns = function () {
  for (const line of lines) {
    line.classList.add("hidden");
  }
  btnContainer.classList.add("hidden");
};

//grab elemnets
const btnContainer = document.querySelector("#btn-holder");
const gameBoard = document.querySelector("#game-board");
const playBtn = document.querySelector("#btn-start");
const message = document.querySelector("#heading");
const colorBtns = document.querySelectorAll(".btn-slot");
const lines = document.querySelectorAll("hr");
let text = message.textContent;

//grabing the buttons
//add event listeners for each
const btnOne = document.getElementById("btn-one");
const btnTwo = document.getElementById("btn-two");
const btnThree = document.getElementById("btn-three");
const btnFour = document.getElementById("btn-four");
const btnFive = document.getElementById("btn-five");
const btnSix = document.getElementById("btn-six");
const btnSeven = document.getElementById("btn-seven");

//variables to update the board
const red = 2;
const black = 1;
let totalMoves = 0;

let board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

//Creating the board
const renderBoard = function () {
  gameBoard.innerHTML = "";
  for (let row of board) {
    let tableRow = document.createElement("tr");
    gameBoard.append(tableRow);
    for (let cell of row) {
      let tableCell = document.createElement("td");
      tableRow.append(tableCell);
      if (cell === 1) {
        tableCell.classList.add("black-move");
      } else if (cell === 2) {
        tableCell.classList.add("red-move");
      }
    }
  }
};

//Functions to switch users turn
const redMove = function () {
  for (const btn of colorBtns) {
    btn.classList.remove("red-turn");
  }
  message.textContent = `Black's Move ⚫️`;
};

const blackMove = function () {
  for (const btn of colorBtns) {
    btn.classList.add("red-turn");
  }
  message.textContent = `Red's Move 🔴`;
};

//Function to start and restart the game
playBtn.addEventListener("click", function () {
  message.textContent = `Red's Move 🔴`;
  playBtn.textContent = `Restart`;
  board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  //make rhe hidden thing a function cause you need it below
  //refactor
  for (const line of lines) {
    line.classList.remove("hidden");
  }
  btnContainer.classList.remove("hidden");
  text = message.textContent;
  renderBoard();
  userTurn();
  totalMoves = 0;
  btnOneCount = 0;
  btnTwoCount = 0;
  btnThreeCount = 0;
  btnFourCount = 0;
  btnFiveCount = 0;
  btnSixCount = 0;
  btnSevenCount = 0;
  clearClasses();
});

//Function to add to event listeners
const userMove = function (num) {
  if (totalMoves % 2 === 0) {
    redMove();
    updateBoard(num, red);
    if (isGameWon()) {
      message.textContent = `Congrats! Red you won in ${
        totalMoves / 2 + 1
      } moves!`;
      playBtn.textContent = "New Game!";
      hideBtns();
    }
  } else if (totalMoves % 2 === 1) {
    blackMove();
    updateBoard(num, black);
    if (isGameWon()) {
      message.textContent = `Congrats! Black you won in ${
        (totalMoves + 1) / 2
      } moves!`;
      playBtn.textContent = "New Game!";
      hideBtns();
    } else if (totalMoves === 41) {
      message.textContent = `It's a tie!`;
    }
  }
  isGameWon();
  return (totalMoves += 1);
};

//Variables for counting each click to adjust the animations
let btnOneCount = 0;
let btnTwoCount = 0;
let btnThreeCount = 0;
let btnFourCount = 0;
let btnFiveCount = 0;
let btnSixCount = 0;
let btnSevenCount = 0;

//Function for animations
const ballDrop = function (element, num, btnCount) {
  if (totalMoves % 2 == 0) {
    switch (btnCount) {
      case 0:
        element.classList.add("ball-one-red");
        setTimeout(function () {
          userMove(num);
        }, 400);
        break;
      case 1:
        element.classList.add("ball-two-red");
        setTimeout(function () {
          userMove(num);
        }, 360);
        break;
      case 2:
        element.classList.add("ball-three-red");
        setTimeout(function () {
          userMove(num);
        }, 320);
        break;
      case 3:
        element.classList.add("ball-four-red");
        setTimeout(function () {
          userMove(num);
        }, 280);
        break;
      case 4:
        element.classList.add("ball-five-red");
        setTimeout(function () {
          userMove(num);
        }, 240);
        break;
      case 5:
        element.classList.add("ball-six-red");
        setTimeout(function () {
          userMove(num);
        }, 200);
        break;
    }
  } else if (totalMoves % 2 === 1) {
    switch (btnCount) {
      case 0:
        element.classList.remove("ball-one-red");
        element.classList.add("ball-one-black");
        setTimeout(function () {
          userMove(num);
        }, 400);
        break;
      case 1:
        element.classList.remove("ball-one-red");
        element.classList.remove("ball-two-red");
        element.classList.add("ball-two-black");
        setTimeout(function () {
          userMove(num);
        }, 360);
        break;
      case 2:
        element.classList.remove("ball-one-red");
        element.classList.remove("ball-two-red");
        element.classList.remove("ball-three-red");
        element.classList.add("ball-three-black");
        setTimeout(function () {
          userMove(num);
        }, 320);
        break;
      case 3:
        element.classList.remove("ball-one-red");
        element.classList.remove("ball-two-red");
        element.classList.remove("ball-three-red");
        element.classList.remove("ball-four-red");
        element.classList.add("ball-four-black");
        setTimeout(function () {
          userMove(num);
        }, 280);
        break;
      case 4:
        element.classList.remove("ball-one-red");
        element.classList.remove("ball-two-red");
        element.classList.remove("ball-three-red");
        element.classList.remove("ball-four-red");
        element.classList.remove("ball-five-red");
        element.classList.add("ball-five-black");
        setTimeout(function () {
          userMove(num);
        }, 240);
        break;
      case 5:
        element.classList.remove("ball-one-red");
        element.classList.remove("ball-two-red");
        element.classList.remove("ball-three-red");
        element.classList.remove("ball-four-red");
        element.classList.remove("ball-five-red");
        element.classList.remove("ball-six-red");
        element.classList.add("ball-six-black");
        setTimeout(function () {
          userMove(num);
        }, 200);
        break;
    }
  }
};

//Event listeners for placement buttons
//Button one
btnOne.addEventListener("click", function () {
  ballDrop(btnOne, 0, btnOneCount);
  btnOneCount += 1;
});

//Button two
btnTwo.addEventListener("click", function () {
  ballDrop(btnTwo, 1, btnTwoCount);
  btnTwoCount += 1;
});

//Button three
btnThree.addEventListener("click", function () {
  ballDrop(btnThree, 2, btnThreeCount);
  btnThreeCount += 1;
});
//Button four
btnFour.addEventListener("click", function () {
  ballDrop(btnFour, 3, btnFourCount);
  btnFourCount += 1;
});
//Button five
btnFive.addEventListener("click", function () {
  ballDrop(btnFive, 4, btnFiveCount);
  btnFiveCount += 1;
});
//Button six
btnSix.addEventListener("click", function () {
  ballDrop(btnSix, 5, btnSixCount);
  btnSixCount += 1;
});
//Button seven
btnSeven.addEventListener("click", function () {
  ballDrop(btnSeven, 6, btnSevenCount);
  btnSevenCount += 1;
});

const userTurn = function () {
  if (text.startsWith("R")) {
    for (const btn of colorBtns) {
      btn.classList.add("red-turn");
    }
  }
};

const updateBoard = function (column, user) {
  for (let i = board.length - 1; i >= 0; i--) {
    let currentRow = board[i];
    if (currentRow[column] !== 0) {
      continue;
    } else {
      currentRow[column] = user;
      i = 0;
    }
  }
  renderBoard();
};

// isGameWon() function returns true if 4-in-a-row is found on the board
let isGameWon = function () {
  let won = false;
  //set won as false so it will return false at end of function if it doesn't find a 4-in-a-row
  const edgeX = board[0].length;
  //x axis edge is fine as length
  const edgeY = board.length - 3;
  //made limit/edge for Y axis search, so diagonal and/or down searches don't go out of bounds
  //length of each array is 6, but length of board array is only 5,
  //also we're searching from top down, so we only need to search arrays 0 through 2 (so length of 5, -3, or board.length -3)
  //to find any 4-in-a-row down and/or diagonal

  // HORIZONTAL
  // iterate each row

  //For horizontal searches use entire board.length for y instead of edgeY
  //so it can find any horizontal 4-in-a-rows on arrays/rows of indexes 3 through 5
  for (let y = 0; y < board.length; y++) {
    // iterate each cell in the row
    for (let x = 0; x < edgeX; x++) {
      let cell = board[y][x];

      // Only check if cell is filled
      if (cell !== 0) {
        // Check the next three cells for the same value
        if (
          cell === board[y][x + 1] &&
          cell === board[y][x + 2] &&
          cell === board[y][x + 3]
        ) {
          // console.log(
          //   "4 in a row horizontal found at " + (x + 1) + ":" + (y + 1)
          // );

          won = true;
        }
      }
    }
  }

  // VERTICAL
  // iterate each row
  for (let y = 0; y < edgeY; y++) {
    // iterate each cell in the row
    for (let x = 0; x < edgeX; x++) {
      let cell = board[y][x];

      // Only check if cell is filled
      if (cell !== 0) {
        // Check the next three cells for the same value
        if (
          cell === board[y + 1][x] &&
          cell === board[y + 2][x] &&
          cell === board[y + 3][x]
        ) {
          // console.log(
          //   "4 in a row vertical found at " + (x + 1) + ":" + (y + 1)
          // );

          won = true;
        }
      }
    }
  }

  // DIAGONAL (DOWN RIGHT)
  // iterate each row
  for (let y = 0; y < edgeY; y++) {
    // iterate each cell in the row
    for (let x = 0; x < edgeX; x++) {
      let cell = board[y][x];

      // Only check if cell is filled
      if (cell !== 0) {
        // Check the next three cells for the same value
        if (
          cell === board[y + 1][x + 1] &&
          cell === board[y + 2][x + 2] &&
          cell === board[y + 3][x + 3]
        ) {
          // console.log(
          //   "4 in a row down-right found at " + (x + 1) + ":" + (y + 1)
          // );

          won = true;
        }
      }
    }
  }

  // DIAGONAL (DOWN LEFT)
  // iterate each row
  for (let y = 0; y < edgeY; y++) {
    // iterate each cell in the row
    for (let x = 0; x < edgeX; x++) {
      let cell = board[y][x];

      // Only check if cell is filled
      if (cell !== 0) {
        // Check the next three cells for the same value
        if (
          cell === board[y + 1][x - 1] &&
          cell === board[y + 2][x - 2] &&
          cell === board[y + 3][x - 3]
        ) {
          // console.log(
          //   "4 in a row down-left found at " + (x + 1) + ":" + (y + 1)
          // );

          won = true;
        }
      }
    }
  }
  return won;
};
