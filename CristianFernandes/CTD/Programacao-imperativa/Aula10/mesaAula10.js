/*
O que esses códigos retornam?
Neste exercício, você terá que pensar sobre o que esses códigos retornam sem testá-lo no console.
*/

let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])


let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ];
//console.log(grupoDeAmigos[1][0]);


let str = "una string qualquer"
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ];
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]);

//Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
function imprimirInverso(umArray){
    console.log(umArray[2]);
    console.log(umArray[1]);
    console.log(umArray[0]);
}
imprimirInverso(['teste',1,2])