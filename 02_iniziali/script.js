/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getPrimaLettera(names) {
    return names.map
    (function(name) {
        return name.charAt(0);
    });
}

// bosun
// function getPrimaLettera(names){
//     return names.map(name => name.charAt(0));
// }

// Invoca la funzione qui e stampa il risultato in console
const primaLettera = getPrimaLettera (names);
console.log(primaLettera)



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]