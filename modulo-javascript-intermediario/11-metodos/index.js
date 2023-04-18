let usuario= {
    nome: 'Wagner',
    excluir: function() { // Metodo
        console.log(`O usário ${this.nome} foi excluído`)
    }

}

usuario.excluir(); // chamando o método