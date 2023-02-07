function getHourSeconds(segundos) {
    //multiplica por 1000 p ficar em milesimo
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let cronometro;

function iniciaTimer() {
    cronometro = setInterval(function(){
        segundos++;
        timer.innerHTML = getHourSeconds(segundos);
    }, 1000);
}


iniciar.addEventListener('click', function (event) {
    iniciaTimer();
    document.body.style.color = 'black';
});

pausar.addEventListener('click', function (event) {
    clearInterval(cronometro); 
    document.body.style.color = 'red';
});

zerar.addEventListener('click', function (event) {
    clearInterval(cronometro);
    timer.innerHTML = '00:00:00';
    //tem q colocar para o timer zerar e qnd clicar em inicar ele começar a contar do zero novamente
    segundos=0;
    document.body.style.color = 'red';
});