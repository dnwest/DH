let cadastro = {
    nome : 'Cristian Fernandes',
    Apelido : 'Cristian',
    idade : 37,
    usuario : 'cristian',
    email : 'cristian.daniel.fernandes@hotmail.com'
}

console.log(cadastro);

let strCadastro = JSON.stringify(cadastro);
console.log(strCadastro);

function ContasBancarias (numeroDeConta, tipoDeConta, saldo, titularDaConta) {
    this.numeroDeConta = numeroDeConta,
    this.tipoDeConta = tipoDeConta,
    this.saldo = saldo,
    this.titularDaConta = titularDaConta;
}

let conta = new ContasBancarias(123, 'corrente', 1000, 'Cristian');

console.log(conta); 

