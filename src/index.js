import './index.scss';
import ClientGame from './client/ClientGame';

const startGame = document.querySelector('#start-game-button');
const chatWrap = document.querySelector('.chat-wrap');
const form = document.getElementById('form');
const input = document.getElementById('input');

startGame.addEventListener('click', () => {
  const playerName = document.querySelector('#name');
  const divToHide = document.querySelector('.start-game');

  ClientGame.init({ tagId: 'game', playerName: playerName.value });

  chatWrap.getElementsByClassName.display = 'block';
  divToHide.parentNode.removeChild(divToHide);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(input.value)
    console.log(input.value);

  input.value = '';
});
