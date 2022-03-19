const containner = document.querySelector('.containner'),
    // Pega o conteúdo atual
    cardTemporario = containner.innerHTML,
    // Novo card que será inserido
    cardNovo = 'Teste de inserção, criar elementos do card aqui </br>';

// Concatena os card colocando o novo antes do card existente.
cardTemporario = cardNovo + cardTemporario;

// Coloca o novo card pelo DOM
containner.innerHTML = cardTemporario;