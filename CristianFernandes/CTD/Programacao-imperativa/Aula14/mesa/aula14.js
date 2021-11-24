
//modulos
//1 - Exercicio

const expression = require('./expression');

console.log( expression(10, 5));


//2- Exercicio - Modulo externo


const cep = require('cep-promise');

cep(15910000)
  .then(console.log)