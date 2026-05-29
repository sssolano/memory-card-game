const cardEl = document.getElementById("card-element")
const cardsShuffle = []
let count = 0

const myCards = [
    {
        name: "Credit Card",
        type: "Joker",
        description: "Go up to -$20 in debt",
        img: "/img/credit-card-joker.svg",
    },
    {
        name:"Hack",
        type: "Joker",
        description: "Retriggers each played 2, 3, 4, and 5",
        img: "/img/hack-joker.svg",
    },
    {
        name: "Overstock",
        type: "Voucher",
        description: "The shop has an additional card slot",
        img: "/img/overstock-voucher.svg",
    },
    {
        name: "Walkie Talkie",
        type: "Joker",
        description: "Each played 10 or 4 gives +10 Chips and +4 Mult when scored",
        img: "/img/walkie-talkie-joker.svg",
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
    return cardsShuffle
}
shuffleDeck(myCards)

// aqui hacemos render de las cartas
function renderCards() {
    cardsShuffle.map( card => {
        cardEl.innerHTML += `<li><img src="/img/back-card-img.svg" alt="the image of a back card style like balatro">${card.name} is a  ${card.type}</img></li>`
    })
}

renderCards()
