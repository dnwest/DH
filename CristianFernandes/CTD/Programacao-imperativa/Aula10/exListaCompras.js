/*
Exercício “Lista de Compras”
Objetivo
Entender e aplicar as funções auxiliares relacionadas ao array.
Micro desafios

Crie um array que contenha nomes de produtos para compra. 

Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 

Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.

console.log(“O método Join realiza tal coisa”)
console.log(RESULTADO_DO_JOIN)

*/

//JOIN
let listaCompras = ["Maça", "Banana", "Pera", "Caju", "Feijão", "Arroz", "Tomate", "Costela"];
let separando = listaCompras.join(" - ")
console.log(separando);

//POP
let ultimoItem = listaCompras.pop()
console.log(ultimoItem);

//PUSH
listaCompras.push("Macarrão");
console.log(listaCompras);

//SHIFT


//Unshift
