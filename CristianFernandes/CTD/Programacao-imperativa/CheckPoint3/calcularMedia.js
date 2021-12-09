const aluno = require("./aluno");
const estudantes = require("./cadastros");

let curso = {
    nomedoCurso: "CTD",
    faltasMaximas: 3,
    estudantes: [],
    addAluno: function (aluno) {
        return this.estudantes.push(aluno);
    },
    aprovado: function (aluno) {
        if (aluno.calcularMedia() > 6 && aluno.qtdFaltas < this.faltasMaximas) {
            return true;
        }
        else if (aluno.calcularMedia() * 1.1 > 6 && aluno.qtdFaltas == this.faltasMaximas) {
            return true;
        }
        else {
            return false;
        }
    },
    aprovados: function () {
        let aprovados = [];
        this.estudantes.forEach(result => {
            if (this.aprovado(result)) {
                aprovados.push("O Aluno " + result.nome + " teve " + result.calcularMedia() + " de média e faltou " + result.qtdFaltas + " vezes, foi aprovado!")
            }
            else {
                aprovados.push("O Aluno " + result.nome + " teve " + result.calcularMedia() + " de média e faltou " + result.qtdFaltas + " vezes, foi reprovado.")
            }

        })
        return aprovados;
    }
}

let newAluno = new aluno("Marcelo", 8, [10, 8, 7]);
newAluno.adicionarFaltas();
estudantes.forEach(result => {
    curso.addAluno(result);
}) 
curso.addAluno(newAluno)


console.log(curso.aprovados());
// No aluno add "Marcelo" a falta soma, mas nos demais não soma :( 