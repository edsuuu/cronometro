function createClock(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT',
    });
}

const relogio = document.querySelector('#relogio');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const clear = document.querySelector('#clear');
const texto = document.querySelector('#texto');
let segundos = 0;
let timer;

function iniciarRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = createClock(segundos);
    }, 1000);
}

play.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    relogio.classList.remove('zerado');

    clearInterval(timer);
    iniciarRelogio();
});

pause.addEventListener('click', function (event) {
    relogio.classList.remove('zerado');
    relogio.classList.add('pausado');
    
    clearInterval(timer);
});

clear.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    relogio.classList.add('zerado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach(function(letra, i){   
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 400 * i)
  });
}

const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);