const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let canvasWidth = (canvas.width = window.innerWidth);
let canvasHeight = (canvas.height = window.innerHeight);
let halfWidthCanvas = canvasWidth / 2;
let halfHeightCanvas = canvasHeight / 2;
let squareWidth = 10;
let numOfLines = 500;
let saveInterval = null;

const resize = () => {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  canvasWidth = canvas.width = window.innerWidth;
  canvasHeight = canvas.height = window.innerHeight;
  halfWidthCanvas = canvasWidth / 2;
  halfHeightCanvas = canvasHeight / 2;
};

function drawLine(x1, y1, x2, y2, color) {
  ctx.beginPath();
  ctx.lineJoin = 'round';
  ctx.strokeStyle = color;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}
let i = 1;
let mult = 0;

function drawSimmetric() {
  if (i < numOfLines && mult < numOfLines - 1) {
    saveInterval = setInterval(() => {
      drawLine(
        halfWidthCanvas - squareWidth * mult,
        halfHeightCanvas - squareWidth * mult,
        halfWidthCanvas + squareWidth * (mult + 1),
        halfHeightCanvas - squareWidth * mult,
        'yellow'
      );
      drawLine(
        halfWidthCanvas + squareWidth * (mult + 1),
        halfHeightCanvas - squareWidth * mult,
        halfWidthCanvas + squareWidth * (mult + 1),
        halfHeightCanvas + squareWidth * (mult + 1),
        'violet'
      );
      drawLine(
        halfWidthCanvas + squareWidth * (mult + 1),
        halfHeightCanvas + squareWidth * (mult + 1),
        halfWidthCanvas - squareWidth * (mult + 1),
        halfHeightCanvas + squareWidth * (mult + 1),
        'lime'
      );
      drawLine(
        halfWidthCanvas - squareWidth * (mult + 1),
        halfHeightCanvas + squareWidth * (mult + 1),
        halfWidthCanvas - squareWidth * (mult + 1),
        halfHeightCanvas - squareWidth * (mult + 1),
        'cyan'
      );
      i++;
      mult++;
    }, 100);
  } else {
    clearInterval(saveInterval);
  }
}

window.addEventListener('resize', _ => {
  resize();
  i = 1;
  mult = 0;
  drawSimmetric();
});

document.addEventListener('DOMContentLoaded', e => {
  drawSimmetric();
});
