// dom elements
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const flipcard = document.querySelector('#flipcard');

const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const card4 = document.querySelector('#card4');

// Businesslogic
let currentLocation = 1;
let numCards = 4;
let maxLocation = numCards + 1;
let mediaQuerie = window.matchMedia('(max-width:480px)');

// functions
function openCard() {
  if (mediaQuerie.matches) {
    flipcard.style.transform = 'translateY(50%)';
    prevBtn.style.transform = 'translateY(160px)';
    nextBtn.style.transform = 'translateY(160px)';
  } else {
    flipcard.style.transform = 'translateX(50%)';
  }
}

function closeCard(isFirstPage) {
  if (mediaQuerie.matches) {
    if (isFirstPage) {
      flipcard.style.transform = 'translateY(0%)';
    } else {
      flipcard.style.transform = 'translateY(100%)';
    }
  } else {
    if (isFirstPage) {
      flipcard.style.transform = 'translateX(0%)';
    } else {
      flipcard.style.transform = 'translateX(100%)';
    }
  }
}

const nextCard = () => {
  if (currentLocation < maxLocation)
    switch (currentLocation) {
      case 1:
        openCard();
        card1.classList.add('flipped');
        card1.style.zIndex = 2;
        break;
      case 2:
        card2.classList.add('flipped');
        card3.style.zIndex = 3;
        break;
      case 3:
        card3.classList.add('flipped');
        card4.style.zIndex = 4;
        break;
      case 4:
        card4.classList.add('flipped');
        card1.style.zIndex = 1;

        closeCard(false);
        break;
      default:
        throw new Error('er gaat iets niet goed nie');
    }
  currentLocation++;
};

const prevCard = () => {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeCard(true);
        card1.classList.remove('flipped');
        card1.style.zIndex = 4;
        card2.style.zIndex = 3;
        break;
      case 3:
        card2.classList.remove('flipped');
        card3.style.zIndex = 2;
        break;
      case 4:
        card3.classList.remove('flipped');
        card4.style.zIndex = 1;
        break;
      case 5:
        openCard();
        card4.classList.remove('flipped');
        card4.style.zIndex = 4;
        break;
      default:
        throw new Error('er gaat iets niet goed nie');
    }
    currentLocation--;
  }
};

// eventlisteners
prevBtn.addEventListener('click', prevCard);
nextBtn.addEventListener('click', nextCard);
