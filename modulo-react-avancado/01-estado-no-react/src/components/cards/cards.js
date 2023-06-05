import Card from '../card/card'

const cardsTitle = ['Título card 1', 'Título card 2', 'Título card 2']

const showCardColor = (color) => {
    console.log(color)
}

const Cards = () => {
    return (
        <div>
            <h2>Meus Cards</h2>
            <div>
                {cardsTitle.map((cardsTitle, index) =>
                (
                    <Card key={index}
                        showCardColor={showCardColor}>
                        <h3>{cardsTitle}</h3>
                        <p>Paragrafo do card</p>
                    </Card>
                )
                )}

                <Card color={'blue'}
                    showCardColor={showCardColor}>
                    <h3>Card com fundo de outra cor</h3>
                    <p>Paragrafo do card</p>
                </Card>



            </div>
        </div>


    )
}

export default Cards