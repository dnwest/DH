// Pega o conteúdo atual
const containner = document.getElementById('containner');
const prevent = document.getElementById('addCard');
//Previne no reloud
prevent.addEventListener('click', function(event){
    event.preventDefault();
});
// Adiciona o card
function addCards() {
     cardTemporario = containner.innerHTML,
        // Novo card que será inserido
        cardNovo = 'Teste de inserção, criar elementos do card aqui </br>';

    // Concatena os card colocando o novo antes do card existente.
    cardTemporario = cardNovo + cardTemporario;

    // Coloca o novo card pelo DOM
    containner.innerHTML = cardTemporario;

    
};
