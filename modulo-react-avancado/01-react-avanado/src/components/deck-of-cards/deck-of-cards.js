import { useState, useEffect } from "react"; // importa o useState do React
import Form from "../forms/form";

async function createDeck() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const deck = await response.json()
    return deck.deck_id

}

async function getCards(deckId) {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    return await response.json()
}



const CardList = (props) => {
    return (
        <ul>
        {
            props.cards.map((card, index) => {
                 return (
                    <li key={index}>
                        <img src={card.image} alt={card.value} />
                        <p>{card.value} {card.suit}</p>
                    </li>
                )
            })
        }
    </ul>
    )
}

// Cria o componente para receber um Deck de cartas
const DeckOfCards = () => {


    const [deck, setDeck] = useState({
        cards: [] // objeto passado como paremetro do useState, define o estado inicial
    })

    useEffect(() => {
        const fetchData = async () => {
            const deckId = await createDeck()
            const data = await getCards(deckId)

            setDeck({
                cards: data.cards
            })
        }

        fetchData()
    },[])

    const addCard = (newCard) => {
        setDeck({
            cards: [...deck.cards, newCard]
        })
    }

    return (
        <section>
            <Form addCard = {addCard} />
            {deck.cards.length > 0 ? <CardList cards ={deck.cards} /> : "Nenhuma carta encontrada"}
        </section>
    )

    // constructor() {
    //     super()
    //     // inicializa o componente com o array de cartas vazio
    //     this.state = {
    //         cards: []
    //     }
    // }

    // // quando o componente montar serão chamados as funçoes para pegar o deck de cartas
    // // tabém atualiza o estados com as cartar que retornam do deck de cartas
    //  async componentDidMount() {
    //     const deckId = await createDeck()
    //     const data = await getCards(deckId)
    //     this.setState({
    //         cards: data.cards
    //     })
    // }

    // // rederiza o componenet no DOM
    // render() {
    //     return (
    //         <section>
    //             <ul>
    //                {
    //                 this.state.cards.map((card, index) => {
    //                     return (
    //                         <li key={index}>
    //                             <img src={card.image} alt={card.value} />
    //                         </li>
    //                     )
    //                 })
    //                }
    //             </ul>
    //         </section>
    //     )
    // }
}

export default DeckOfCards