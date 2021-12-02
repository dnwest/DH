
/* 1 - Crie uma função que receba um array composto por números 
e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz,
usando map() e reduce().
 */
let array = [11, 2, 8, 58, 74, 858, 9];

let calc = array.map(function (result) {
    return result && array.reduce(function (acumulador, item) {
        return result / acumulador + item;
    })
})

console.log(calc);


/*2) - Crie uma função que receba um array de palavras e um número, e que retorna uma matriz 
(array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. 
(verifique como funciona o método filter ())
*/

let nomes = ["Luigi", "Mario", "1Up", "Toad", "Wario", 64];
let numero = 3;
function filtraQuant(nomes, numero) {
    let maiores = nomes.filter(function (quant) {
        return quant.length > numero;
    });
    return maiores;
}

console.log(filtraQuant(nomes, numero));

/*3) Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: 
nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética 
e a outra o fará por nota, da mais alta para a mais baixa. */

let students = [
    { name: 'Dione', note: 10 },
    { name: 'Thiago', note: 9 },
    { name: 'Fabiano', note: 8 },
    { name: 'Leandro', note: 7 },
    { name: 'Janderson', note: 10 },
    { name: 'Rodrigo', note: 5 },
    { name: 'Matheus', note: 10 }
];

students.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});

console.log(students);

students.sort(function (a, b) {
    if (a.note < b.note) {
        return 1;
    }
    if (a.note > b.note) {
        return -1;
    }
    return 0;
});

console.log(students);