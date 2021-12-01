let numeros = [1,2,5,8,9];

let dobro = numeros.map(function(value){
    console.log(value);
    return value *2
});

console.log(dobro);

let idades = [15,12,16,20,25,30,36];

let maiores = idades.filter(function(item) {
    console.log(item);
    return item >= 18;
});

console.log(maiores);

let total = idades.reduce(function(acumulador, item) {
    return acumulador+' - '+item;
});

console.log(total);

let paises = ['Brasil', 'Cuba', 'Peru', 'India'];

paises.forEach(function(item) {
    console.log("<li>"+item+"</li>");
});
