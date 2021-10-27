function somar(a, b){
    console.log("Dentro da Function");
    return(a + b)
}

console.log(somar(10,5));

function nomePessoa(nome, idade){
    return nome+" tem a idade de "+idade;
}

console.log(nomePessoa("Marcos", 25));
console.log(nomePessoa("Ana", 30));
console.log(nomePessoa("Rodrigo", 45));

let sub = function(x, y){ //função anonima
    return x - y;
}
console.log (sub(10,5));

// Mesa de Trabalho

// Desafio 1
function teste1(x, y){
    return y - x
}

teste1(10,40)
//console.log(teste1(10,40));

//Desafio 2

function teste2(x, y){
    return x * 2
    console.log(x)
    return x / 2
}

teste2(10)
//console.log(teste2(10));

//Funções Simples
// 1- Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function converta(pol){
    return pol * 2.54
}

console.log(converta(2));

// 2- Crie uma função que receba uma string e a converta em um URL. ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function turl(funcaojs){
    return funcaojs = "http://www.funcaojs.com.br"

    console.log(funcaojs);


}