const board = document.querySelector(".drawing");
const button = document.querySelector(".board-change");
const rainbowButton = document.querySelector(".rainbow");
let confirm = document.getElementById("confirmationLabel");

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
let draw = (pixels, color = "color") => {
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.setAttribute("class", `pixels ${color}`);
    });
  });
};

let drawRainbow = (pixels) => {
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = random_color();
    });
  });
};

let drawShades = (pixels) => {
  let opacity = 0;
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = `rgb(0,0,0,${(opacity += 0.1)})`;
    });
  });
};

let random_color = () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";

  return bgColor;
};

createBoard(50);
let pixels = document.querySelectorAll(".pixels");
draw(pixels);

button.addEventListener("click", () => {
  let inputField = document.getElementById("userInput").value;

  if (inputField <= 100) {
    for (let i = 0; i < pixels.length; i++) {
      pixels[i].remove();
    }
    createBoard(inputField);
    pixels = document.querySelectorAll(".pixels");
    draw(pixels, "color");
    confirm.textContent = `Changed the board to ${inputField} by ${inputField} `;
  } else {
    confirm.textContent = "Please choose a number between 1 and 100";
  }
});

rainbowButton.addEventListener("click", () => {
  drawRainbow(pixels);
  confirm.textContent = `Changed the color`;
});
