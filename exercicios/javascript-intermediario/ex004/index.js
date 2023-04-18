const inputs = document.querySelectorAll('input')

inputs.forEach(function(input){
    input.addEventListener('change', ()=>{
        if(input) {
            input.classList.add('ativa')
        } else {
            input.classList.remove('ativa')
        }
    })
})