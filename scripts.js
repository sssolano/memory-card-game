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

// creamos el array para guardar las cartas
let shuffleCards = []

// aqui creamos el orden aleatorio de mi array
function shuffleDeck(list) {
    
    const cardsShuffle = list.concat(list)

    while (cardsShuffle.length > 0) {
        let position = Math.floor(Math.random() * cardsShuffle.length)
        let element = cardsShuffle.splice(position, 1)[0]
        shuffleCards.unshift((element))
    }
    return shuffleCards
}
// aqui pasamos el array de las cartas
shuffleDeck(myCards)

console.log(shuffleCards)

// aqui hacemos render de las cartas
function renderCards(shuffleCards) {
    shuffleCards.map( card => {
        cardEl.innerHTML += `
            <li>
                This is ${card.name} and type ${card.type}
                <img src="/img/back-card-img.svg" alt="the image of a back card style like balatro"></img>
            </li>`
    })
}

renderCards(shuffleCards)
