const cardEl = document.getElementById("card-element")

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

// crear un nuevo array para las cartas mezcladas
// podemos 

// usamos concat para unir las cartas 
const cardsShuffle = myCards.concat(myCards)

// aqui creamos el orden aleatorio de mi array
function shuffleDeck(cardsShuffle) {
    for (let card of cardsShuffle) {
        card = cardsShuffle[Math.floor(cardsShuffle.length * Math.random())]
    }
    return cardsShuffle
}
// aqui pasamos el array con las cartas duplicadas
shuffleDeck(cardsShuffle)

// aqui hacemos render de las cartas
function renderCards() {
    cardsShuffle.map( card => {
        cardEl.innerHTML += `
            <li>
                This is ${card.name} and type ${card.type}
                <img src="/img/back-card-img.svg" alt="the image of a back card style like balatro"></img>
            </li>`
    })
}

renderCards()
