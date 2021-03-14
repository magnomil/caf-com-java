const nome = "rebeca";
const concatenacao = 'olá' + 'mundo' + 10 + 'procura algo'
    //agora fazendo com tamplate string uma melhor forma de fazer concatenação e assim evitar erros.
const template = `
olá
${nome}!`
console.log(nome, concatenacao);
console.log(template);

// por meio do tamplate string é possível colocar expressões matemáticas dentro do número.
console.log(`A soma de 1+1 é ${1+1}`);
const up = texto => texto.to.Upper.Case();
console.log(`ei...${'toma cuidado'}!`);