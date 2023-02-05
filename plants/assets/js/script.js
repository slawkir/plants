let buttonGardens = document.querySelectorAll('.service__btn')[0];
let buttonLawn = document.querySelectorAll('.service__btn')[1];
let buttonPlanting = document.querySelectorAll('.service__btn')[2];

let allCards = document.querySelectorAll('.service__item');



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
    if (element.classList.contains('blur')) {
      element.classList.remove('blur');
    } else { 
      element.classList.add('blur');
    }
  });
});

buttonPlanting.addEventListener('click', function () {
  cardsWithoutPlanting.forEach(element => {
    if (element.classList.contains('blur')) {
      element.classList.remove('blur');
    } else {
      element.classList.add('blur');
    }
  });
});

buttonLawn.addEventListener('click', function () {
  cardWithoutLawn.forEach(element => {
    if (element.classList.contains('blur')) {
      element.classList.remove('blur');
    } else {
      element.classList.add('blur');
    }
  });
});