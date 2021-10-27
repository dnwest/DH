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

