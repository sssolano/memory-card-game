const cardEl = document.getElementById("card-element")
const ulEl = document.querySelector("#card-element")

// añadir las definiciones del juego -> estilo balatro 

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
    },
    {
        name: "Blueprint",
        type: "Joker",
        description: "Copies ability of Joker to the right",
        img: "/img/blueprint-joker.svg"
    },
    {
        name: "Polychrome Ace",
        type: "Card",
        description: "Modifier that gives an played card a x1.5 multiplier to your total mult",
        img: "/img/polychrome-ace-card.svg"
    },
    {
        name: "Cryptid",
        type: "Spectral Card",
        description: "Creates 2 exact copies (including Enhancements) of a selected card in your hand",
        img: "/img/cryptid-spectral_card.svg"
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

// verificar que si funciona
console.log(shuffleCards)

// aqui hacemos render de las cartas
function renderCards(shuffleCards) {
    shuffleCards.map( card => {
        // utilizamos la propiedad data crear una propiedad que guarde el nombre de la carta cuando hace render
        cardEl.innerHTML += `
            <li data-card-name="${card.name}" data-card-img="${card.img}">
                <img src="/img/back-card-img.svg" data-original-img="/img/back-card-img.svg" alt="the image of a back card style like balatro">
            </li>
            `
    })
}

renderCards(shuffleCards)

// aqui hacemos la verificacion de los clicks en los li
// tenemos que crear una funcion para esto

let cardsFlipped = []

ulEl.addEventListener('click', event => {
    if (event.target.matches('img')) {
        // let backCard = event.target.src
        let cardName = event.target.parentElement.dataset.cardName

        // accedemos al elemento padre <li></li> porque ahi esta la img
        event.target.src = event.target.parentElement.dataset.cardImg
        cardsFlipped.push(event.target)
        console.log(cardsFlipped[0].dataset.cardName)
        

        if (cardsFlipped.length === 2) {
            if (cardsFlipped[0] === cardsFlipped[1]) {
                cardsFlipped = []
                console.log(cardsFlipped)
                console.log("SAME CARD :3!!!")
            } else {
                setTimeout( () => {
                    cardsFlipped[1].src = cardsFlipped[1].dataset.originalImg,
                    cardsFlipped[0].src = cardsFlipped[0].dataset.originalImg,
                    cardsFlipped = []
                }, 1000)
                console.log("NOT the same card >:(")
            }
        }
    }
})