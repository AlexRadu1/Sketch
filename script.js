let userInput = 0;
const board = document.querySelector(".drawing");
const button = document.querySelector("button");

let createBoard = (length) => {
  board.style.gridTemplateColumns = `repeat(${length}, ${1300 / length}px)`;
  board.style.gridTemplateRows = `repeat(${length}, ${900 / length}px)`;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      const div = document.createElement("div");
      div.classList.add("pixels");
      board.appendChild(div);
    }
  }
};
let draw = (pixels) => {
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.setAttribute("class", "pixels color-blue");
    });
  });
};

createBoard(16);
let pixels = document.querySelectorAll(".pixels");
draw(pixels);

button.addEventListener("click", () => {
  userInput = window.prompt("how many squares");
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].remove();
  }
  createBoard(userInput);
  pixels = document.querySelectorAll(".pixels");
  draw(pixels);
});
