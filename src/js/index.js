/* eslint-disable no-unused-vars */
import '../css/index.css';
import Leaderboard from './modules/leaderboard.js';

const addbtn = document.querySelector('#add');
const refbtn = document.querySelector('#refresh');
const username = document.getElementById('Name');
const userscore = document.querySelector('#Scored');

const leaderBoard = new Leaderboard();
leaderBoard.render();
addbtn.addEventListener('click', () => {
  const formdata = {
    user: username.value,
    score: userscore.value,
  };

  leaderBoard.addScore(formdata);
});
refbtn.addEventListener('click', () => {
  leaderBoard.clearDom();
  leaderBoard.render();
});
