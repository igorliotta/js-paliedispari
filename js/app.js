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