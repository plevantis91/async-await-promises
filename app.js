//1
async function draw1(){
    let data = await $.getJSON('https://deckofcardsapi.com/api/deck/new/draw/')
    let { suit, value } = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
}
draw1();
//2 
// async function draw2(){
//     let firstDeck = await $.getJSON('https://deckofcardsapi.com/api/deck/new/draw/');
//     let firstDeckData = await firstDeck.json();
//     let secondCardData
// }
async function part2() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';
    let c1 = await $.getJSON(`${baseURL}/new/draw/`);
    let c2 = await $.getJSON(`${baseURL}/${c1.deck_id}/draw/`);
    [c1, c2].forEach(card => {
      let { suit, value } = card.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  }
    );
}
  part2();
// Purpose: To create a deck of cards and draw a card from the deck
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded')
    
class Deck {
  constructor() {
    this.deck_id = null
    this.baseURL = "https://deckofcardsapi.com/api/deck/";
  }

  async getDeck() {
    try{
    const response = await fetch(`${this.baseURL}/new/draw/`)
    const data = await response.json()
    console.log(data)
    this.deck_id = data.deck_id
  }
    catch (error) {
        console.log(error)
    }
}

  async drawCard() {
    try{
    const response = await fetch(`${this.baseURL}/${this.deck_id}/draw/`)
    const data = await response.json()
    console.log(data)
    if (data.remaining === 0) button.remove()
    return data.cards[0]
  }
    catch (error) {
        console.log(error)
    }
}

  async createCardImage(card) {
    const img = document.createElement('img')
    img.src = card.image
    img.alt = card.code
    img.style.transform = `rotate(${Math.random() * 90 -30 }deg) translate(${Math.random() * 40 -5 }px, ${Math.random() * 40- 5}px)`

    return img
  }
}

const deck = new Deck()
deck.getDeck()

const button = document.querySelector('button')
button.addEventListener('click', async () => {
  const card = await deck.drawCard()
  const cardImage = await deck.createCardImage(card)
  document.body.appendChild(cardImage)
})

});