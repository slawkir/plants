let buttonsService = document.querySelectorAll('.service__btn');
let buttonsServiceActive = [];
buttonsServiceActive.length = 2;

let buttonGardens = document.querySelectorAll('.service__btn')[0];
let buttonLawn = document.querySelectorAll('.service__btn')[1];
let buttonPlanting = document.querySelectorAll('.service__btn')[2];

let allCards = document.querySelectorAll('.service__item');

if (buttonGardens.classList.contains('button__active') && buttonPlanting.classList.contains('button__active')) { 

  buttonLawn.setAttribute('disabled', true);
}

let cardsWithoutGardens = [];
for (let i = 0; i < allCards.length; i++) {
  if (!allCards[i].classList.contains('card-gardens')) { 
    cardsWithoutGardens.push(allCards[i]);
  }
}
let cardsWithoutPlanting = [];
for (let i = 0; i < allCards.length; i++) {
  if (!allCards[i].classList.contains('card-planting')) { 
    cardsWithoutPlanting.push(allCards[i]);
  }
}

let cardWithoutLawn = [];
for (let i = 0; i < allCards.length; i++) {
  if (!allCards[i].classList.contains('card-lawn')) { 
    cardWithoutLawn.push(allCards[i]);
  } 
}

buttonGardens.addEventListener('click', function () {
  cardsWithoutGardens.forEach(element => {
    element.classList.toggle('blur');
  }), 3000,
    toggleBtn(buttonGardens), 3000;
});

buttonPlanting.addEventListener('click', function () {
  cardsWithoutPlanting.forEach(element => {
    element.classList.toggle('blur');
  }),
    toggleBtn(buttonPlanting);
});

buttonLawn.addEventListener('click', function () {
  cardWithoutLawn.forEach(element => {
    element.classList.toggle('blur');
  }),
    toggleBtn(buttonLawn);
});

function toggleBtn(btn) {
  btn.classList.toggle('button__active');
}

