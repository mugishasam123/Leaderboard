const arr = [
  {
    user: 'sam',
    score: 50,
  },
  {
    user: 'sam',
    score: 50,
  },
  {
    user: 'sam',
    score: 50,
  },
  {
    user: 'sam',
    score: 50,
  },
  {
    user: 'sam',
    score: 50,
  },
];
const userList = document.querySelector('.scores-list');

const display = () => {
  arr.forEach((item) => {
    const data = `

    
    <p class="name-score">${item.user}:${item.score}</p>
  
        `;

    const listNode = document.createElement('li');
    listNode.classList.add('list-item');
    listNode.innerHTML = data;
    userList.appendChild(listNode);
  });
};

display();
