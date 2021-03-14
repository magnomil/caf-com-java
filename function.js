//a função pode retornar um valor ou não

// função que não retorna valor
// perceba que eu nãoa atribui nenhum valor a e b
function somaosdois(a, b) {
    console.log(a + b);
}
/*somaosdois(2, 3); // chamando apenas variavel e atribuindo valores por fora ele faz a soma.

// agora função quer retorna.
function soma(a, b = 3) { // o javascript permite atribuir valor ao segundo elemento, uma vez ja ciente antes.
    return a + b
}
// se der o run ele não vai dar o retorno da função.
// para isso precisa console.log(), então ficamos:
console.log(soma(2, 3));
console.log(soma(2));*/

/*
//agora armazenando um valor de uma função dentro de uma variável ou constante
// a função anônima é uma função sem nome.


const SomarOsdois = function(a, b) {
    console.log(a + b)
}
SomarOsdois(2, 3)
*/

//armazenando uma função arrow em uma variável
// => significa function
const soma = (a, b) => {
    return (a + b)
}
console.log(soma(10, 23))

// diminuindo a sintaxe usando o retorno implícito.
// quando o código tem apenas uma única linha significa que vai executar uma única sentença de código.

const subtracao = (a, b) => a - b
console.log(subtracao(4, 8))