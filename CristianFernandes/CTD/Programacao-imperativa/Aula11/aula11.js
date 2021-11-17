for (let contador = 1; contador <=5; contador++){
    let result = contador *2;
    console.log("olá mundo ", contador, "*2 = ", contador*2)
}

let arrayNome = ["Marcos", "João", "Daniel", "Gustavo", "Dione"];
console.log("1 -",arrayNome[1]);

console.log(arrayNome.length);
for (let j = 0; j < arrayNome.length; j++) {
    console.log(j, " - ",arrayNome[j]);
}

let contador = 1
while(contador <=5){
    console.log(contador, "Ola pessoal");
    contador ++;
}

console.log("-----------------------");

contador = 1;
do{
    console.log(contador, "Ola pessoal ");
    contador ++;
    }while (contador <=5);