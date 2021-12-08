const data = require("./Dados.js");


/* Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
a média das idades das pessoas que responderam ótimo; */

function mediaIdade(med) {
    const calc = med.filter(d1 => d1.opniao == 3);
    const mda = calc.reduce((n1, n2) => n1 + n2.idade, 0) / calc.length;
    return mda;
}

console.log(mediaIdade(data));

// a quantidade de pessoas que responderam regular;

function avReg (result) {
const evalReg = result.filter(vl => vl.opniao == 1);
return evalReg.length;
}

console.log(avReg(data));

// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

function porcentagem (value) {
const calcPorc = value.filter(vl => vl.opniao === 2);
return ((calcPorc.length*100) / data.length);

}

console.log(porcentagem(data)+ "%");