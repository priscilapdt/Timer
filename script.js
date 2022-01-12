const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let seg = 0;
let timer;


iniciar.addEventListener('click' , function (e) {
    clearInterval(timer);
    iniciaCrono();
});

pausar.addEventListener('click' , function (e){
    clearInterval(timer); //para parar o cronometro
});

zerar.addEventListener('click' , function (e){
    clearInterval(timer);  
    relogio.innerHTML = '00:00:00'  //para tornar o cronometro zero
    seg = 0;  
});


function getSegundos(segundos){
    let data = new Date(segundos * 1000); //para ficar em segundos
    return data.toLocaleTimeString('pt-BR', {
       hour12: false, //para ficar em 24h
       timeZone: 'GMT'
    });
}

function iniciaCrono(){  //função que inicia o cronometro
    timer = setInterval(function() {   
         seg++;
         relogio.innerHTML = getSegundos(seg);
    }, 1000); 
}

