const data = require("./DadosJS.js");

let maiorAlt = [data];
maiorAlt = 0;
data.forEach(function (a) {
    maiorAlt = Math.max(a.altura, maiorAlt);
});

let menorAlt = Math.min.apply(Math, data.map(function (b) { 
    return b.altura; 
}));

console.log('A maior altura é ' + maiorAlt + '\n' + 'E a menor altura é ' + menorAlt);


