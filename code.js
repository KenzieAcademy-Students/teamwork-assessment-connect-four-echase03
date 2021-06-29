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
const checkWinner = function () {};

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
  //need to turn into function
  //refactor
  // for (const line of lines) {
  //   line.classList.remove("hidden");
  // }
  // btnContainer.classList.remove("hidden");
};
