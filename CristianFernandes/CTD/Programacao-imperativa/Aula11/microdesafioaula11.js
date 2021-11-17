/*
1 - Repetir como um papagaio
Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.
2 - Contando números ímpares
Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. 
Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.
3 - Criando a tabuada
Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).
*/

console.log("------ 1 ------");

for(let contador = 1; contador <=5; contador ++){
    console.log (contador, " - Ola mundo ");
}

console.log("------ 2 ------");

for (let i = 1; i <= 10; i++){
    // Verificar se é impar
    if (i%2 !=0){
        console.log("numero ímpar ==", i);
    }
}

console.log("------ 3 ------");

for (let tabuada = 1; tabuada <=10; tabuada ++){
    let result = tabuada * 2;
    console.log("2", "*" , tabuada, " = ", tabuada*2);
}