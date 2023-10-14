console.log('PAROLA PALINDROMA')
function isPalindromeWord (word, reversedWord) {
    // Blocco di codice da eseguire
    if (word === reversedWord) {
        return true
    } else {
        return false
    }
}

// const word = prompt('Inserisci una parola');
// console.log(word);

// for (i = 0; i < word.length; i++) {
    
//     const charWord = word[i];
//     // console.log(charWord);
// }

// const reversedWord = word.split('').reverse().join('');

// for (i = 0; i < reversedWord.length; i++) {
    
//     const charReversedWord = reversedWord[i];
//     console.log(charReversedWord);
// }

const wor = prompt('Inserisci una parola');
const revWord = wor.split('').reverse().join('');

if (isPalindromeWord(wor, revWord)) {
    console.log(`${wor} è una parola palindroma.`);
} else {
    console.log(`${wor} non è una parola palindroma.`);
}


console.log('PARI E DISPARI')

// function isSum (somma) {
//     // Blocco di codice da eseguire
//     if (somma % 2 === 0 ) {
//         return 
//     } else {
//         return false
//     }
// }

// - Facciamo scegliere all'utente tra pari e dispari e gli facciamo inserire un numero che vada da 1 a 5.
//   - Dichiarare una variabile value dove l'utente, tramite un prompt, scriverà pari o dispari.
//   - Facciamo un console.log(value).
//   - Dichiariamo una variabile userNumber dove l'utente, tramite un prompt inserirà un numero da 1 a 5.
//   - Facciamo un console.log(userNumber).
// - Generiamo un numero random da 1 a 5 per il computer tramite una funzione.
//   - Dichiariamo una variabile pcNumber dove tramite la funzione parseInt(Math.random) verrà inserito un numero random da 1 a 5.
// - Sommiamo i due numeri a disposizione.
//   - Dichiariamo una variabile somma che sarà uguale a userNumber + pcNumber.
// - Infine dichiariamo chi ha vinto.


// const value = prompt('Caro utente, scegli tra pari o dispari');
// console.log(value);

// const somma = userNumber + pcNumber;
// console.log(somma, 'SOMMA');

// function isEven (somma) {
//     // Blocco di codice
//     if (somma % 2 === 0 ) {
//         return true
//     } else {
//         return false
//     }
// }

// if (isSum(somma)) {
//     console.log(`User hai vinto!!`);
// } else {
//     console.log(`User hai perso!!`);
// }

// function isPcNumber (pcNumber) {
//     // Blocco di codice
//    return pcNumber;
// }

// function isSumOfNumbersEven (somma) {
//     // Blocco di codice
// if (somma === 0) {
//     return true
// } else {
//     return false
// }
// }


// const pcNumber = parseInt(Math.random() * 5 + 1);
// console.log(pcNumber, 'PC-NUMBER');

// const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
// // console.log(userNumber, 'USER-NUMBER');

// if (userNumber % 2 === 0) {
//   console.log(userNumber, 'User hai scelto Pari');
// } else {
//   console.log(userNumber, 'User hai scelto Dispari');
// }

// const sum =  userNumber + pcNumber;

// if (sum % 2 === 0 ) {
//     console.log(sum, 'La somma è pari');
// } else {
//     console.log(sum, 'La somma è dispari');
// }

// if (isSumOfNumbersEven(sum)) {
//     console.log(`User hai vinto!!`);
// } else {
//     console.log(`User hai perso!!`);
// }

let value = 'pari';

let userNumber = getRandomIntInclusive(1, 5);
let pcNumber = getRandomIntInclusive(1, 5);

let sum = userNumber + pcNumber;
console.log(userNumber, pcNumber, sum, value);

if ( isEvenNumber(sum) && value === 'pari') {
    console.log('User hai vinto!!');
} else if ( isOddNumber(sum) && value === 'dispari') {
    console.log('User hai vinto!!');
} else {
    console.log('User hai perso!!')
}

function isEvenNumber(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}

function isOddNumber (number) {
    if (number % 2 !== 0) {
        return true
    } else {
        return false
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }


