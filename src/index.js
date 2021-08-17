import { io } from 'socket.io-client';
import './index.scss';
import ClientGame from './client/ClientGame';
import { getTime } from './common/util';

const startGame = document.querySelector('#start-game-button');
const chatWrap = document.querySelector('.chat-wrap');
const form = document.getElementById('form');
const input = document.getElementById('input');
const message = document.querySelector('.message');

startGame.addEventListener('click', () => {
  const socket = io('https://jspromarathonchat.herokuapp.com/');

  const playerName = document.querySelector('#name');
  const divToHide = document.querySelector('.start-game');

  ClientGame.init({ tagId: 'game', playerName: playerName.value });

  socket.emit('start', playerName.value);

  chatWrap.style.display = 'block';
  divToHide.parentNode.removeChild(divToHide);

  socket.on('chat connection', (data) => {
    console.log(data);
    message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> - ${data.msg}</p>`);
  });

  socket.on('chat disconnect', (data) => {
    console.log(data);
    message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> - ${data.msg}</p>`);
  });

  socket.on('chat message', (data) => {
    console.log(data);
    message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> - ${data.msg}</p>`);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value) {
      console.log(input.value);
      socket.emit('chat message', input.value);

      input.value = '';
    }
  });
});


