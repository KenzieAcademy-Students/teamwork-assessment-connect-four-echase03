"use strict";
// Your Code Here.

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
  message.textContent = `Black's Move⚫️`;
};

const blackMove = function () {
  for (const btn of colorBtns) {
    btn.classList.add("red-turn");
  }
  message.textContent = `Red's Move🔴`;
};

const hideBtns = function () {
  for (let line of lines) {
    line.classList.add("hidden");
  }
  btnContainer.classList.add("hidden");
};

//Function to start and restart the game
playBtn.addEventListener("click", function () {
  message.textContent = `Red's Move🔴`;
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
  if (btnContainer.className === "btn-changes") {
    while (btnContainer.firstChild) {
      btnContainer.removeChild(btnContainer.firstChild);
    }
    btnContainer.append(btnOne);
    btnOne.className = "btn-slot black-turn";
    btnContainer.append(btnTwo);
    btnTwo.className = "btn-slot black-turn";
    btnContainer.append(btnThree);
    btnThree.className = "btn-slot black-turn";
    btnContainer.append(btnFour);
    btnFour.className = "btn-slot black-turn";
    btnContainer.append(btnFive);
    btnFive.className = "btn-slot black-turn";
    btnContainer.append(btnSix);
    btnSix.className = "btn-slot black-turn";
    btnContainer.append(btnSeven);
    btnSeven.className = "btn-slot black-turn";
  }
  text = message.textContent;
  renderBoard();
  userTurn();
  totalMoves = 0;
});

//Function to add to event listeners
const userMove = function (num) {
  if (totalMoves % 2 === 0) {
    redMove();
    updateBoard(num, red);
  } else if (totalMoves % 2 === 1) {
    blackMove();
    updateBoard(num, black);
  }
  checkColumn();
  if (isGameWon()) {
    if (totalMoves % 2 === 0) {
      let winningStatement = document.createElement("h6");
      winningStatement.innerHTML = `Red won the game in ${
        totalMoves + 1
      } moves!`;
      message.append(winningStatement);
      hideBtns();
    } else {
      let winningStatement = document.createElement("h6");
      winningStatement.innerHTML = `Black won the game in ${
        totalMoves + 1
      } moves!`;
      message.append(winningStatement);
      hideBtns();
    }
  }
  console.log(totalMoves);
  return (totalMoves += 1);
};

//Event listeners for placemennt buttons
//Button one
btnOne.addEventListener("click", function () {
  userMove(0);
});
//Button two
btnTwo.addEventListener("click", function () {
  userMove(1);
});
//Button three
btnThree.addEventListener("click", function () {
  userMove(2);
});
//Button four
btnFour.addEventListener("click", function () {
  userMove(3);
});
//Button five
btnFive.addEventListener("click", function () {
  userMove(4);
});
//Button six
btnSix.addEventListener("click", function () {
  userMove(5);
});
//Button seven
btnSeven.addEventListener("click", function () {
  userMove(6);
});

// Needs work or maybe not
const userTurn = function () {
  if (text.startsWith("R")) {
    for (const btn of colorBtns) {
      btn.classList.add("red-turn");
    }
  }
};

//Need to make functions to check for this
// const checkWinner = function () {};

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
  // checkColumn();
  //need to turn into function
  //refactor
  // for (const line of lines) {
  //   line.classList.remove("hidden");
  // }
  // btnContainer.classList.remove("hidden");
};

//Goal - stop updateBoard function or remove btn event listener once top array is not equal to 0
//once top array is anything not 0 then change display
//maybe just create a new function and throw it in usermove?

function removeButton(button) {
  if (button) {
    let placeHolder = document.createElement("button");
    placeHolder.className = "placeHolder";
    btnContainer.replaceChild(placeHolder, button);
    btnContainer.classList.add("btn-changes");
  }
}

function checkColumn() {
  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] !== 0) {
      if (i === 0) {
        let buttonDisplay = document.querySelector("#btn-one");
        removeButton(buttonDisplay);
        // buttonDisplay.className = "hidden";
      } else if (i === 1) {
        let buttonDisplay = document.querySelector("#btn-two");
        removeButton(buttonDisplay);
      } else if (i === 2) {
        let buttonDisplay = document.querySelector("#btn-three");
        removeButton(buttonDisplay);
      } else if (i === 3) {
        let buttonDisplay = document.querySelector("#btn-four");
        removeButton(buttonDisplay);
      } else if (i === 4) {
        let buttonDisplay = document.querySelector("#btn-five");
        removeButton(buttonDisplay);
      } else if (i === 5) {
        let buttonDisplay = document.querySelector("#btn-six");
        removeButton(buttonDisplay);
      } else if (i === 6) {
        let buttonDisplay = document.querySelector("#btn-seven");
        removeButton(buttonDisplay);
      }
    }
  }
}

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
          console.log(
            "4 in a row horizontal found at " + (x + 1) + ":" + (y + 1)
          );

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
          console.log(
            "4 in a row vertical found at " + (x + 1) + ":" + (y + 1)
          );

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
          console.log(
            "4 in a row down-right found at " + (x + 1) + ":" + (y + 1)
          );

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
          console.log(
            "4 in a row down-left found at " + (x + 1) + ":" + (y + 1)
          );

          won = true;
        }
      }
    }
  }
  //update HTML with winner statement

  console.log("Game Won? " + won);
  return won;
};
