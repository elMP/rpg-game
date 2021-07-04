import './index.scss';
import SenseiWalk from './assets/Female-4-Walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const spriteW = 48;
const spriteH = 48;
const shots = 3;
let cycle = 0;
let buttonDownPressed = false;
let buttonRightPressed = false;
let buttonUpPressed = false;
let buttonLeftPressed = false;
let pX = canvas.width / 2 - 24;
let pY = canvas.height / 2 - 24;
let spriteImage = 0;

function keyDownHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    buttonDownPressed = true;
  }
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    buttonRightPressed = true;
  }
  if (e.key === 'Left' || e.key === 'ArrowLeft') {
    buttonLeftPressed = true;
  }
  if (e.key === 'Up' || e.key === 'ArrowUp') {
    buttonUpPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    buttonDownPressed = false;
  }
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    buttonRightPressed = false;
  }
  if (e.key === 'Left' || e.key === 'ArrowLeft') {
    buttonLeftPressed = false;
  }
  if (e.key === 'Up' || e.key === 'ArrowUp') {
    buttonUpPressed = false;
  }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

const img = document.createElement('img');
img.src = SenseiWalk;

img.addEventListener('load', () => {
  setInterval(() => {
    if (buttonDownPressed) {
      pY += 10;
      if (pY > canvas.height - 48) {
        pY = canvas.height - 48;
      }
      cycle = (cycle + 1) % shots;
      spriteImage = 0;
    }
    if (buttonRightPressed) {
      pX += 10;
      if (pX > canvas.width - 48) {
        pX = canvas.width - 48;
      }
      cycle = (cycle + 1) % shots;
      spriteImage = 96;
    }
    if (buttonLeftPressed) {
      pX -= 10;
      if (pX < 0) {
        pX = 0;
      }
      cycle = (cycle + 1) % shots;
      spriteImage = 48;
    }
    if (buttonUpPressed) {
      pY -= 10;
      if (pY < 0) {
        pY = 0;
      }
      cycle = (cycle + 1) % shots;
      spriteImage = 144;
    }

    ctx.clearRect(0, 0, 600, 600);
    ctx.drawImage(
      img,
      cycle * spriteW,
      spriteImage,
      spriteW,
      spriteH,
      pX,
      pY,
      48,
      48
    );
  }, 120);
});
