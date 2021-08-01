import './index.scss';
import ClientGame from './client/ClientGame';

const startGame = document.querySelector('#start-game-button');


startGame.addEventListener('click', () => {
  const playerName = document.querySelector('#name');
  const divToHide = document.querySelector('.start-game');

  ClientGame.init({ tagId: 'game', playerName: playerName.value });
  divToHide.parentNode.removeChild(divToHide);
});

