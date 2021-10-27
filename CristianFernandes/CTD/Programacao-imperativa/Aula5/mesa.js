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

function conurl(nome){
    return "https://www."+nome+".com.br";

}    

console.log(conurl("funcaojs"));


// 3- Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function frase(texto){
    return texto+"!";
}

console.log(frase("Atenção"));


// 4- Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function idadeCanina(value){
    return value * 7;
}

console.log(idadeCanina(5));

// 5- Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.

function calcSalario(salario){
    return salario / 160;
}

console.log(calcSalario(1900))

// 6- Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores.

function calcIMC(peso, altura){
    return peso / (altura * altura);
}

console.log(calcIMC(70,1.90));


// 7- Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 

function txt(texto){
    return texto.toUpperCase();
}

console.log(txt("hello world"));


// 8- Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.

function type(value){
    return typeof value;
}

console.log(type(30));
console.log(type("hello"));

// 9- Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.

