"use strict";
// Your Code Here.

//grab elemnets
const btnContainer = document.querySelector("#btn-holder");
const gameBoard = document.querySelector("#game-board");
const playBtn = document.querySelector("#btn-start");
const message = document.querySelector("#heading");
const colorBtns = document.querySelectorAll(".btn-slot");
const lines = document.querySelectorAll("hr");
const resetBtn = document.querySelector("reset");
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

//Function to start and restart the game
playBtn.addEventListener("click", function () {
  message.textContent = `Red's Move🔴`;
  playBtn.textContent = `Restart`;
  //make rhe hidden thing a function cause you need it below
  for (const line of lines) {
    line.classList.remove("hidden");
  }
  btnContainer.classList.remove("hidden");
  text = message.textContent;
  renderBoard();
  userTurn();
  console.log(text);
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

//Have to use in event listenrs
//Will probablt need to change the text thing
const switchUser = function () {
  if (text.startsWith("R")) {
    for (const btn of colorBtns) {
      btn.classList.remove("red-turn");
    }
    //delete move to event listener
    text.textContent = `Black's Move⚫️`;
  } else {
    for (const btn of colorBtns) {
      btn.classList.add("red-turn");
    }
    //delete move to event listener
    text.textContent = `Red's Move🔴`;
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
    console.log(board);
  }
  renderBoard();
  //need to turn into function
  for (const line of lines) {
    line.classList.remove("hidden");
  }
  btnContainer.classList.remove("hidden");
};

updateBoard(2, red);
updateBoard(2, black);
updateBoard(2, red);

resetBtn.addEventListener("click", ()=>{
  gameBoard.forEach(colorBtns =>{
    colorBtns.style.backgroundcolor = "white";
  });
  userTurn.style.backgroundcolor = "black";
  return switchUser
})
