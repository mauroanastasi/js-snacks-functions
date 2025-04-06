/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'partenopeo';


// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)

const newResult = (parola) => {
    let count = 0;
    let vocali = [`a`, `e`, `i`, `o`, `u`]    
    for(let i=0; i<parola.length;i++){
        if(vocali.includes(parola[i])){
            count++;
        }
    }
    return count
}


// NON FARE COSì, se fai così stai cercando di stampare la funzione stessa (console.log(newResult)), invece di chiamarla e stampare il risultato della sua esecuzione. Per ottenere il risultato corretto, devi chiamare la funzione con un argomento e stampare il valore restituito.
// newResult(word);
// console.log(newResult)

console.log(newResult(word));