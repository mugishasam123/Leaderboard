/* eslint-disable no-unused-vars */

export default class Leaderboard {
  constructor() {
    this.userlist = document.querySelector('.scores-list');
  }

  addScore = async (formdata) => {
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tK2FmtwRDoIM235dzjDF/scores/',
      {
        method: 'POST',
        body: JSON.stringify(formdata),
        headers: {
          'content-type': 'application/json',
        },
      },
    );
  };

  clearDom = () => {
    this.userlist.innerHTML = '';
  };

  render = async () => {
    const request = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tK2FmtwRDoIM235dzjDF/scores/',
      { method: 'GET' },
    );
    const { result } = await request.json();
    if (result.length) {
      result.forEach((element) => {
        const userData = `
            <p class ="name-score">${element.user}:${element.score}</p>
        `;

        const listNode = document.createElement('li');
        listNode.classList.add('list-item');
        listNode.innerHTML = userData;

        this.userlist.appendChild(listNode);
      });
    } else {
      this.userlist.innerHTML = 'No data to display';
    }
  };
}
