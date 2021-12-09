function aluno(nome, qtdFaltas, notas){
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;
    this.calcularMedia = function () {
        soma = 0; notas.forEach(result => { soma = soma + result; });
        return soma / notas.length
    }
    this.adicionarFaltas = function () {
        this.qtdFaltas += 1;
    }
    
}
module.exports = aluno;
