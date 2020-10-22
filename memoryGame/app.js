const gameCards = [
  {
    url:'img/galinha.jpg',
    backface:'img/backface.jpg',
    id: 1,
  },
  {
    url:'img/galinha.jpg',
    backface:'img/backface.jpg',
    id: 1,
  },
  {
    url:
      'img/elefante.jpg',
    backface:
      'img/backface.jpg',
    id: 2,
  },
  {
    url:
      'img/elefante.jpg',
    backface:
      'img/backface.jpg',
    id: 2,
  },
  {
    url:
      'img/girafa.jpg',
    backface:
      'img/backface.jpg',
    id: 3,
  },
  {
    url:
      'img/girafa.jpg',
    backface:
      'img/backface.jpg',
    id: 3,
  },
];

let lives = 3;
let boardLock = false;

const gameBoard = document.querySelector('.memory-game');
let hasFlipped = false;
let firstCard, secondCard;

function flip() {
  if(boardLock) {
    return;
  }
  this.classList.toggle('flip');
  if (!hasFlipped) {
    firstCard = this;
    hasFlipped = true;
    return;
  }
  hasFlipped = false;
  secondCard = this;
  
  if (firstCard.dataset.index === secondCard.dataset.index) {
    firstCard.removeEventListener('click', flip);
    secondCard.removeEventListener('click', flip);
    console.log('right');
  } else {
      boardLock = true;
      lives--;
      console.log(lives); 
      setTimeout(() => {
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip');
          boardLock = false;
      }, 700);
      if (lives < 1) {
          alert('realoading the game');
          document.location.reload();
      }
  }
}

function populateList(gameCards,gameBoard) {
  //shuffling the array
    const shuffledGameCards = gameCards
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
    gameBoard.innerHTML = shuffledGameCards.map(card => {
        return `
        <div data-index="${card.id}" class="memory-card">
            <img class="front-face" src="${card.url}">
            <img class="back-face" src="${card.backface}">
        </div>`
    })
    
}

populateList(gameCards,gameBoard);

if (lives < 0) {
    window.location.reload();
}

const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flip));
// gameCards.forEach((card) => card.addEventListener('click', flip));
