import { useState } from "react";

const Form =(props)=> {
    // Define o estado inicial do campos do formulário
    const [inputs, setInputs] = useState({
        image: '',
        value: '',
        suit: ''
    })
    // Atualiza o estados do forumulário
    const handleInputChange = (event) => {
        console.log(event)
        // Utiliza a desestruturação para pegar propriedades dentro do Event e Target
        const {target} = event
        const {name} = target
        const {value} = target

        setInputs({
            ...inputs,
            [name]: value
        })
    }
     // Evita o comportamente padrão do formulario de dar um refresh na página
    const handleSubmit =(event) => {
        event.preventDefault()
        props.addCard(inputs)
    }   

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="image">Endereço da imagem da carta</label>
                    <input type="text" id="image" name="image" onChange={handleInputChange} value={inputs.image}/>
                </div>
                <div>
                    <label htmlFor="value">Nome da carta</label>
                    <input type="text" id="value" name="value" onChange={handleInputChange} value={inputs.value}/>
                </div>
                <div>
                    <label htmlFor="suit">Naipe da carta</label>
                    <input type="text" id="suit" name="suit" onChange={handleInputChange} value={inputs.suit}/>
                </div>
                <input type="submit" />
            </form>
        </>
    )
}

export default Form