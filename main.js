//Array conenente numeri casuali
let numbCasual = [];
let nUtente = [];
let secondi = 3
let indovinati = [];

//Creo un ciclo per inserire numeri casuali nell'array (tutti numeri diversi)
while (numbCasual.length < 5) {
    let x = random(1, 99);
    if (!numbCasual.includes(x)) {
        numbCasual.push(x)
    }
}

//Creo un ciclo per inserire i numeri in pagina
for (let i = 0; i < 5; i++) {
    document.getElementById('numeri-casuali').innerHTML += `<span>${numbCasual[i]}</span > `
}



//Creo variabile cronometro pwr il TIMER
let cronometro = setInterval(function () {

    //inserisco i secondi a scermo
    document.getElementById('secondi').innerText = secondi;

    //Se i secondi diventano 0 allora ferma il cronometro e rimuovi i numeri
    if (secondi == 0) {
        clearInterval(cronometro)
        document.getElementById('numeri-casuali').classList.add('d-none')
        document.getElementById('titolo-numeri').classList.add('d-none')

        //ritardo di 1 secondo per far sparire i numeri
        setTimeout(function () {

            //Funzione faccio inserire i numeri all'utente
            nUtente = creaArray()

            document.getElementById('secondi-mancanti').classList.add('d-none')

            //Funzione confornto array
            confronto(nUtente, numbCasual)
            document.getElementById('titolo-numeri').classList.remove('d-none')
            document.getElementById('numeri-casuali').classList.remove('d-none')

        }, 1000)

    }
    secondi--
}, 1000)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Funzione genera numeri random
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Funzione crea array
function creaArray() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array[i] = prompt('inserisci numero')
    }
    return array
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function confronto(array1, array2) {
    for (let i = 0; i < 5; i++) {

        if (array1[i] == (array2[0])) {
            document.getElementById('indovinati').innerHTML += `<span>${array1[i]}</span>`
        }
        if (array1[i] == (array2[1])) {
            document.getElementById('indovinati').innerHTML += `<span>${array1[i]}</span>`

        }
        if (array1[i] == (array2[2])) {
            document.getElementById('indovinati').innerHTML += `<span>${array1[i]}</span>`

        }
        if (array1[i] == (array2[3])) {
            document.getElementById('indovinati').innerHTML += `<span>${array1[i]}</span>`

        }
        if (array1[i] == (array2[4])) {
            document.getElementById('indovinati').innerHTML += `<span>${array1[i]}</span>`

        }
    }
}