const quadrado = document.querySelector('.quadrado')

quadrado.addEventListener('click', ()=>{
  const quadradoAzulexiste = quadrado.classList.contains('azul')

  if(quadradoAzulexiste) {
        quadrado.classList.remove('azul')
  } else {
    quadrado.classList.add('azul')
    alert('Tem a classe azul')
  }


})

