# Palindroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

- Creare una funzione per capire se la parola inserita è palindroma.
  - Creare una funzione isPolindromeWord.
  - function isPolindromeWord (word, reversedWord) {.
  - SE le due parole sono identiche ci sarà un return true ALTRIMENTI un return false.
  

- Chiedere all’utente di inserire una parola
  - Dichiarare una variabile wor che permetta all'utente tramite un prompt di scrivere la parola desiderata.
  - Fare un console.log(wor) per controllare cosa succede.
  - Creiamo un ciclo FOR che ci permetta di stampare in console ad ogni indice la lettera della parola corrispondente.
  - Fare un console.log(word[i]) per controllare cosa succede.
  - Dichiarare una variabile revWord che ci permetta di memorizzare la parola in maniera inversa.
  - Fare un console.log(revWord) per controllare cosa succede.
   - Cicliamo tramite FOR reverseWord e facciamo un console.log(reverseWord[i]) per stampare gli indici corrispondenti ad ogni lettera della parola reversed.

- Infine stampare in console SE la parola inserita dall'utente sarà polindroma o no.

# Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

- Stabiliamo se la somma dei due numeri è pari o dispari usando una funzione.
  - Creare una funzione per capire se la somma è pari o dispari.
  - Creare una funzione isSum.
  - function isSum (somma) {.
  - SE la somma darà resto 0 ci sarà un return true ALTRIMENTI un return false.

- Facciamo scegliere all'utente tra pari e dispari e gli facciamo inserire un numero che vada da 1 a 5.
  - Dichiarare una variabile value dove l'utente, tramite un prompt, scriverà pari o dispari.
  - Facciamo un console.log(value).
  - Dichiariamo una variabile userNumber dove l'utente, tramite un prompt inserirà un numero da 1 a 5.
  - Facciamo un console.log(userNumber).
- Generiamo un numero random da 1 a 5 per il computer tramite una funzione.
  - Dichiariamo una variabile pcNumber dove tramite la funzione parseInt(Math.random) verrà inserito un numero random da 1 a 5.
- Sommiamo i due numeri a disposizione.
  - Dichiariamo una variabile somma che sarà uguale a userNumber + pcNumber.
- Infine dichiariamo chi ha vinto.