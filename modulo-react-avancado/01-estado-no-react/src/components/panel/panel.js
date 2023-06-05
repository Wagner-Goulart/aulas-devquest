import { Component } from "react";
import './panel.css'

class Panel extends Component {
    // constructor é necessário para utilização de estados em compenentes de classe 
    // deve ser sempre o primeiro método executado quando a classe é gerada
    constructor() {
        // Super deve ser chamado quando trabalhando com estados em componentes de classe
        // Extende as propriedade e métodos do Component
        super()
        this.state = {
            // Estado inicial
            title : 'Valor inicial'
        }
    }
    render(){
        return (
            // setState irá alterar a renderizar novamente o título quando o painel for clicado
            <section className="panel" onClick={()=>this.setState({title:'Mudou'})}>
                <h2>{this.state.title}</h2>
            </section>
        )
    }
}

export default Panel