
// 1-) Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
let number = [4,10,14,18,6,20,22,74];

let impar = number.map(function(value){
    return value + 1
});

console.log(impar);

// 2-) Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.





// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”


// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.