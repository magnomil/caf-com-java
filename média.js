//calculate the average with the following notes
const note1 = 8.6512321;
const note2 = 9.25658;
const note3 = 8.45528;

const total = (note1 + note2 + note3) / 3;

console.log(total.toFixed(2));
console.log(total.toString()); //toString converts a number to a string 
//converte um número em uma string. se eu cologaru um número 2 dentro parêtese do toString(2) ele retorna o número binário no run.
console.log(typeof total); // typeof serve para dizer que a classe a pertence, se é um número, uma string.

if (total >= 8) {
    console.log("congratulations was approved");

} else {
    console.log("You have failed and must go to recovery");

}