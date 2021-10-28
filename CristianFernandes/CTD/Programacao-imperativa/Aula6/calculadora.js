// 1-)

function adicionar(value1, value2){
    return value1 + value2;
}

function subtracao(value1, value2){
    return value1 - value2;
}

function multiplicacao(value1, value2){
    return value1 * value2;
}    

function divisao(value1, value2){
    return value1 / value2;
}

console.log(adicionar(50, 5));
console.log(subtracao(50, 5));
console.log(multiplicacao(50, 5));
console.log(divisao(50, 5));

// 2-)
console.log("--------------------------------------------------------------");
console.log("-------------- Teste de Operações / Calculadora --------------");

console.log("Resultado de Soma (10 + 10) - Resultado de Subtração (50 - 10)  ==> ", adicionar(10, 10)-(subtracao(50, 10)));
console.log("Resultado da multiplicação (100 * 5) ==> ",multiplicacao(100, 5));
console.log("Resultado da divisão (5000 / 5) ==>",divisao(5000, 5));
console.log("Resultado da divisão (5000 / 0) ==>",divisao(5000, 0));


// 3-)
console.log("--------------------------------------------------------------");
function quadradoDoNumero(x){
return multiplicacao(5, 5) * x ;
}

console.log(quadradoDoNumero(2));

function mediaDeTresNumeros(x, y, z){
    return x + y + z / divisao (9, 3);
}

console.log(mediaDeTresNumeros(10, 20, 30));

function calculaPorcentagem(a, b){
    return a * b / 100;
}

console.log(calculaPorcentagem(300, 15));

function geradorDePorcentagem(a, b){
    return a / b * 100;
} 

console.log(geradorDePorcentagem(2, 200),"%");