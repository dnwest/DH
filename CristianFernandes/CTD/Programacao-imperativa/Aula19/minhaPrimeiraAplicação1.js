const data = require("./DadosJS.js");

let maiorAlt = [data];
maiorAlt = 0;
data.forEach(function (a) {
    maiorAlt = Math.max(a.altura, maiorAlt);
});

let menorAlt = Math.min.apply(Math, data.map(function (b) {
    return b.altura;
}));

const contador = function (qtd) {
    cont = qtd.filter((i) => i.sexo == "M");
    return cont.length;
};

console.log('A maior altura é ' + maiorAlt + '\n' + 'E a menor altura é ' + menorAlt + '\n' + 'A quanditade de homens é de: ' + contador(data));