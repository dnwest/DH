// 1 -

const alicia = [23, 69, 43];
const bob = [23, 69, 43];
encontrarGanhador(alicia, bob);
function encontrarGanhador (a, b) {
let pontosPrimeiroParticipante = 0;
let pontosSegundoParticipante = 0;
for (let i = 0; i < a.length; i++){
    if (a[i] > b[i]){
        pontosPrimeiroParticipante = pontosPrimeiroParticipante +1;
    }else if(a[i] < b[i]){
        pontosSegundoParticipante = pontosSegundoParticipante +1;
    }else{
        //console.log("Deu impate")
    }
}
if(pontosPrimeiroParticipante > pontosSegundoParticipante){
    console.log("Alice ganhou com", pontosPrimeiroParticipante, "pontos");
}else if(pontosPrimeiroParticipante < pontosSegundoParticipante){
    console.log("Bob ganhou com", pontosSegundoParticipante, "pontos");
}else{
    console.log("Deu impate, ambos não marcaram nenhum ponto!");
}
}