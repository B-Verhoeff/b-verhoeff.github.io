document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const cardImages = ["kaartjes/Acid.jpg", "kaartjes/AndrewTate.jpg", "kaartjes/ElonMusk.jpg", "kaartjes/Hamza.jpg", "kaartjes/Iman.jpg", "kaartjes/JesseJames.png", "kaartjes/JoeyAK.jpg", "kaartjes/JordanWelch.jpg", "kaartjes/KanyeKLAAR.jpg", "kaartjes/MrBeast.jpg", "kaartjes/TravisScott.jpg", "kaartjes/TristanTate.jpg"];
  const backImage = "plaatjes/achterkant.jpg";

  let flippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;
  let score = 0;

  function generateRandomCards() {
    const duplicateCardImages = cardImages.concat(cardImages);
    const shuffledCards = duplicateCardImages.sort(() => 0.5 - Math.random());
    return shuffledCards;
  }

  function flipCard() {
    if (lockBoard || this === firstCard) return;

    this.classList.add('flip');

    if (!flippedCard) {
      flippedCard = true;
      firstCard = this;
    } else {
      secondCard = this;
      checkMatch();
    }
  }

  function checkMatch() {
    let isMatch = firstCard.getAttribute('data-id') === secondCard.getAttribute('data-id');

    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    score++;

    updateScore();

    if (score === cardImages.length) {
      alert("Gefeliciteerd, je hebt het spel gewonnen!");
    }

    resetBoard();
  }

  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      lockBoard = false;

      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [flippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  function resetGame() {
    const shuffledCards = generateRandomCards();

    cards.forEach((card, index) => {
      card.classList.remove('flip');
      card.addEventListener('click', flipCard);
      const img = card.querySelector('img.front');
      img.src = shuffledCards[index];
      card.setAttribute('data-id', shuffledCards[index]);
    });

    score = 0;
    updateScore();
  }

  function updateScore() {
    const scoreElement = document.querySelector('.score');
    scoreElement.textContent = score;
  }

  cards.forEach(card => {
    card.addEventListener('click', flipCard);
    const img = card.querySelector('img.front');
    img.src = backImage;
  });

  resetGame();
  document.querySelector('.resetButton').addEventListener('click', resetGame);
});