function Account(contaNum, contaTipo, saldo, titular){
    this.contaNum = contaNum;
    this.contaTipo = contaTipo;
    this.saldo = saldo;
    this.titular = titular;
}

module.exports = Account;