/* 1 - Loop de Pares
Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: "O número x é par"
 */

function loopDePares(num) {
    for (let i = 1; i <= 100; i++) {
        result = (num % 2)+i;
        if (result === 0) {
            console.log("O numero " + i + " é par") 
        }

        else {
            console.log(i)
        }
    }
        
    }

    loopDePares(5);


/* let palavra = "ola"
let split = () => palavra.forEach( function( i ) { palavra.push( i ) });
console.log(split); */