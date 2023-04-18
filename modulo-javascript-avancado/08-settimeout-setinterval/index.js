setTimeout(()=>{
    console.log('Excutado após 3 segundos')     
},3000)


let idDoIntervalor = setInterval(()=>{
                            console.log('Excutado a cada 2 segundos')
                        },2000)


setTimeout(()=>{
    clearInterval(idDoIntervalor)
},6000)