const aluno = require("./aluno");
const cadastro = require("./cadastros");

let calcularMedia = {};
for (let aluno of cadastro) {
    // se ainda não tem registro para esta matrícula, cria um novo 
    if (! calcularMedia[cadastro.nome]) {
        calcularMedia[aluno.nome] = {
            'Aluno': aluno.nome, 'total': 0, 'qtd': 0, 'faltas': aluno.qtdFaltas,
        };
        
    }
    // atualiza o total e a quantidade de notas
    calcularMedia[aluno.nome].total += aluno.notas.reduce((sum ,nr)=> sum + nr, 0);
    calcularMedia[aluno.nome].qtd += aluno.notas.length;
    calcularMedia[aluno.nome].faltas += aluno.qtdFaltas;

}
//console.log(calcularMedia);

calcularMedia = Object.values(calcularMedia);
for (let m of calcularMedia) {
    m.media = m.total / m.qtd;
    // apaga a quantidade e o total, pois não preciso mais
    delete m['qtd'];
    delete m['total'];
}

console.log(calcularMedia);

let aprovados = calcularMedia;
if (aprovados.qtdFaltas <= 3 * 1.1 && m.media > 6){
    return true;
}console.log(aprovados(0));
else{
    return false;
}

