import './index.scss';
import ClientGame from './client/ClientGame';

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});
//import SenseiWalk from './assets/Female-4-Walk.png';
/*import terrainAtlas from './assets/terrain.png';
import worldCfg from './configs/world.json';
import sprites from './configs/sprites';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const spriteW = 48;
const spriteH = 48;

const terrain = document.createElement('img');
terrain.src = terrainAtlas;

terrain.addEventListener('load', () => {
  const { map } = worldCfg;
  map.forEach((cfgRow, y) => {
    cfgRow.forEach((cfgCell, x) => {
      const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0];
      ctx.drawImage(
        terrain,
        sX,
        sY,
        sW,
        sH,
        x * spriteW,
        y * spriteH,
        spriteW,
        spriteH
      );
      //console.log(cfgCell[0]);
    });
  });
});*/
/*const shots = 3;
let cycle = 0;
let buttonDownPressed = false;
let buttonRightPressed = false;
let buttonUpPressed = false;
let buttonLeftPressed = false;
let pX = canvas.width / 2 - spriteW / 2;
let pY = canvas.height / 2 - spriteW / 2;
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
      if (pY > canvas.height - spriteH) {
        pY = canvas.height - spriteH;
      }
      cycle = (cycle + 1) % shots;
      spriteImage = 0 * spriteH;
    }
    if (buttonRightPressed) {
      pX += 10;
      if (pX > canvas.width - spriteW) {
        pX = canvas.width - spriteW;
      }
      cycle = (cycle + 1) % shots;
      spriteImage = 2 * spriteH;
    }
    if (buttonLeftPressed) {
      pX -= 10;
      if (pX < 0) {
        pX = 0;
      }
      cycle = (cycle + 1) % shots;
      spriteImage = 1 * spriteH;
    }
    if (buttonUpPressed) {
      pY -= 10;
      if (pY < 0) {
        pY = 0;
      }
      cycle = (cycle + 1) % shots;
      spriteImage = 3 * spriteH;
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
      spriteW,
      spriteH
    );
  }, 120);
});
*/
