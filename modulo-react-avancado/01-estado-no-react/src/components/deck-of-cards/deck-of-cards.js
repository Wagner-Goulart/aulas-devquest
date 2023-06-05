import { Component } from "react";

async function createDeck() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const deck = await response.json()
    return deck.deck_id 

}

async function getCards(deckId) {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`)
    return await response.json()
}

// Cria o componente para receber um Deck de cartas
class DeckOfCards extends Component {
    constructor() {
        super()
        // inicializa o componente com o array de cartas vazio
        this.state = {
            cards: []
        }
    }
    
    // quando o componente montar serão chamados as funçoes para pegar o deck de cartas
    // tabém atualiza o estados com as cartar que retornam do deck de cartas
     async componentDidMount() {
        const deckId = await createDeck()
        const data = await getCards(deckId)
        this.setState({
            cards: data.cards
        })
    }
    
    // rederiza o componenet no DOM
    render() {
        return (
            <section>
                <ul>
                   {
                    this.state.cards.map((card, index) => {
                        return (
                            <li key={index}>
                                <img src={card.image} alt={card.value} />
                            </li>
                        )
                    })
                   }
                </ul>
            </section>
        )
    }
}

export default DeckOfCards