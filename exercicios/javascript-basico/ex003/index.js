const escolhaDoUsuario = confirm("Seja bem vindo(a),aventureiro(a)! Gostaria de pagar R$ 50,00 para passara noite na nossa hospedagem?");

if(escolhaDoUsuario) {
    alert("Ótimo! Nós temos as melhores camas de toda a região!");
}else if(!escolhaDoUsuario) {
    alert("Que pena! Você parecia ser uma pessoa mais legal")
}