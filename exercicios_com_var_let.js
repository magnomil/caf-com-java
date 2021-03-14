// o escopo é um lugar onde a variável é visível.
//a variavel var dentro de um bloco de código, que não seja função. irá ficar visível para todo mundo
// na variavel global var uma subscreve a outra. ex:
/*var numero = 1 // chama-se variável global
    //
    {
        var numero = 2
        console.log('dentro =', numero)
    }
console.log('fora =', numero)*/

// criando uma variável com let
/* no caso do let, as duas variáveis poderão coexistir sem que uma substitua a outra
let numero = 1 // chama-se variável global
    //
    {
        let numero = 2
        console.log('dentro =', numero)
    }
console.log('fora =', numero)

// as variaveis definidas como var tem escopo global e função.
// já as variveis definidas como let tem escopo global, de função e de bloco