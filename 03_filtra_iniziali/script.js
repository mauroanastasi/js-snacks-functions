/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// // Dichiara la funzione qui.
// function selected (nomi, primaLettera){
//     let oneLetter = []
//     for(let i=0; i<nomi.length;i++ ){
//         if(nomi[i][0].toLowerCase() === primaLettera.toLowerCase())
//             oneLetter.push(nomi[i])
//     }
//     return oneLetter

// }

// // Invoca la funzione qui e stampa il risultato in console
// console.log(selected (names,`l`))

// //Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

const newResult = (array, letter) => {
    const gruppo = [];
    for(let i=0; i<array.length; i++){
        if(array[i][0].toLowerCase() === letter.toLowerCase()){
            gruppo.push(array[i]);

        }
        
    }
    return gruppo;
        
    }
    let induction = `a`;
    console.log(newResult (names, induction));