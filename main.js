//Array conenente numeri casuali
let numbCasual = [];

//Creo un ciclo per inserire numeri casuali nell'array (tutti numeri diversi)
while (numbCasual.length < 5) {
    let x = random(1, 5);
    if (!numbCasual.includes(x)) {
        numbCasual.push(x)
    }
}

//Creo un ciclo per inserire i numeri in pagina
for (let i = 0; i < 5; i++) {
    document.getElementById('numeri-casuali').innerHTML += `<span>${numbCasual[i]}</span > `
}


let secondi = 3

//Creo variabile cronometro pwr il TIMER
let cronometro = setInterval(function () {

    //inserisco i secondi a scermo
    document.getElementById('secondi').innerText = secondi;

    //Se i secondi diventano 0 allora ferma il cronometro e rimuovi i numeri
    if (secondi == 0) {
        clearInterval(cronometro)
        document.getElementById('numeri-casuali').classList.add('d-none')
        document.getElementById('titolo-numeri').classList.add('d-none')
    }
    secondi--
}, 1000)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Funzione genera numeri random
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
