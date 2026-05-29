const cardEl = document.getElementById("card-element")
const cardsShuffle = []
let count = 0

const myCards = [
    {
        name: "Credit Card",
        type: "Joker",
        description: "Go up to -$20 in debt"
    },
    {
        name:"Hack",
        type: "Joker",
        description: "Retriggers each played 2, 3, 4, and 5"
    },
    {
        name: "Spades Ace",
        type: "Card",
        description: "The Ace of Spades"
    },
    {
        name: "Walkie Talkie",
        type: "Joker",
        description: "Each played 10 or 4 gives +10 Chips and +4 Mult when scored"
    }
]

// aqui creamos el orden aleatorio de mi array
function shuffleDeck(myCards) {
    for (let card of myCards) {
        card = myCards[Math.floor(myCards.length * Math.random())]
        while ( cardsShuffle.includes(card) ) {
            card = ''
            card = myCards[Math.floor(myCards.length * Math.random())]
        } 
        cardsShuffle.push(card)
    }
    console.log(cardsShuffle)
}

shuffleDeck(myCards)

// cardEl.innerHTML = `<li>${randomShuffle.name} is a ${randomShuffle.type}</li>`  
