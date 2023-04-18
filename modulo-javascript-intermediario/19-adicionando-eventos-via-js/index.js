document
    .querySelector("select[name='estado']")
    //.addEventListener('evento', função)           
    .addEventListener('change', function (event) { // adiciona um eventeo de change 
        //alert(`Selecionou ${evento.alvo.valor}`);
        alert(`Selecionou ${event.target.value}`);
    })