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
let segundos = 0;
    timer;

function iniciarRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = createClock(segundos);
    }, 1000);
}

play.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciarRelogio();
});
pause.addEventListener('click', function (event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
});
clear.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});

