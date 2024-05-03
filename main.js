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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Funzione genera numeri random
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
