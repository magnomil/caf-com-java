const escola = "student";
console.log(escola.charAt(2));
console.log(escola.charAt(3)); // a função charArt() retorna a letra da string selecionada.
console.log(escola.charCodeAt(2)); // serve para achar o código da letra em html
console.log(escola.indexOf(t)); // serve para encontrar qual é o índice da letra
console.log(escola.substring(1)) // quer dizer que vai aparecer as letras a partir do índice 1 da string
console.log(escola.substring(1, 3)) //quer dizer que vai aparecer a letras a partir do índice 1 e não entra a letra do índice 3
console.log(escola.replace(4, 'M')); // Significa que a letra do índice 4 será substituída pela letra M;
console.log('ana, maria,magno,rhaissa, carlos, bianca.'.split(',')) // essa função serve para converter uma string em uma array