//Arrow Functions

let bemVindo = () => 'Olá Mundo';
console.log(bemVindo());

let dobro = numero => numero *2;
console.log(dobro(5));

let soma = (a ,b) => a+b;
console.log(soma(5,5));

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ':' + data.getMinutes();
}
console.log(horaAtual());

// Callbacks


