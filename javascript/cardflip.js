let guess = 0;
let flippedCards = [];
let lockBoard = false; // to prevent clicking more than 2 cards at once

document.addEventListener('DOMContentLoaded', () => {
  assignValue();

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (lockBoard) return;               
      if (flippedCards.includes(card)) return;

      guess += 0.5;
      document.getElementById('count').innerText = Math.floor(guess);

      card.classList.add('flipped');
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        lockBoard = true;  

        let val1 = flippedCards[0].querySelector('.cardback').innerText;
        let val2 = flippedCards[1].querySelector('.cardback').innerText;

        if (val1 === val2) {

          flippedCards = [];
          lockBoard = false;
        } else {
    
          setTimeout(() => {
            flippedCards.forEach(card => card.classList.remove('flipped'));
            flippedCards = [];
            lockBoard = false;
          }, 1000);  
        }
      }
    });
  });
});

function assignValue() {
    let values = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

    
    for (let i = values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]];
    }

   
    let cards = document.querySelectorAll('.cardback');

    cards.forEach((card, i) => {
        card.innerText = values[i];
 
    });

}