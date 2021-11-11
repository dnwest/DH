let nome = "Cristian Daniel Fernandes"
console.log(nome.length);

console.log(nome);
console.log(nome.trim());
nome = nome.trim();
console.log(nome.split(" "));

let lista = ["Marcos","João","Fulano","Ciclano", 25, true]; //Isso é um Array
console.log(lista);
console.log(lista[4]); //exibe uma posição
lista[4] = "novo";
console.log(lista);
lista.push("Teste","Teste1", 15, 78);
console.log(lista)
let x = lista.pop();
console.log(lista);
console.log(x);
let y = lista.shift();
console.log(lista);
console.log(y);
lista.unshift(y, x, "outra coisa");
let strLista = lista.join();
console.log(strLista);
lista.push("João");
console.log(lista);

console.log(lista.indexOf("joãooooo"));
console.log(lista.includes("joão"));