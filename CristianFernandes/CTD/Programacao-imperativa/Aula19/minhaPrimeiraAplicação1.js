const data = require("./DadosJS.js");

let maiorAlt = [data];
 maiorAlt = 0;
  data.forEach(function(a) {
    maiorAlt = Math.max(a.altura, maiorAlt);  
});

let menorAlt = [data];
menorAlt = 0;
data.forEach(function(b) {
    menorAlt = Math.min(b.altura, menorAlt);
});

console.log('A maior altura é '+ maiorAlt + ' e a menor altura é ' + menorAlt);

// let alturaMaior = dados.sort(function (a,b) {
//     if (a.altura > b.altura) {
//         return 1;
//       }
//       if (a.altura < b.altura) {
//         return -1;
//       }
//       return 0;
// });
// let indexFinal = dados.length-1;

//console.log(alturaMaior[0].altura);
//console.log(alturaMaior[indexFinal].altura);
