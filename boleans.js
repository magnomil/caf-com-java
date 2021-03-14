//! antes de qualquer um (p.ex: string/numero/objeto/array), tem a função de negar
// !! é a negação da negação. ex: console.log(!!" 'texto'), vai retornar positivo.
//!! também é tecla para perguntar se objeto/arrey ou qualquer é positivo ou negativo.
//& (significa o e-comercial) será verdadeiros se todos forem verdadeiros
// || (significa o 'ou') será verdadeiro se um deles forem verdadeiros.

// são retornados positivos por convenção da linguagem:
console.log(" os verdadeiros são:");
console.log(!!"3"); // numeral sozinho
console.log(!!"-1"); // um numeral sozinho positivo ou negativo
console.log(!!' '); // aqui há o espaço, por isso é positivos
console.log(!!'texto'); // strings
console.log(!!{}); // objetos são positivos
console.log(!![]); // array vai retorna positivo.
console.log(!!(isAtivo = true));

//são sempre negativos por convenção da linguagem:
console.log('os seguintes são falsos')
console.log(!!0);
console.log(!!''); //aqui a string é vazia.
console.log(!!null);
console.log(!!undefined);
console.log(!!(isAtivo = false));