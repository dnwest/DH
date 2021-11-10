/* 1 ͦ Checkpoint de Programação Imperativa!
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

       1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
       3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
       5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/

function superMicroondas(prato, tempoDigitado) {
    switch (prato) {
        case 2: case 5:
            tempoPadrao = 8
            tempo = tempoPadrao * tempoDigitado
            if (tempo < tempoPadrao) {
                console.log('Tempo insuficiente!');
            } else if (tempo >= tempoPadrao * 3) {
                console.log('KABUMM!!');
            } else if (tempo >= tempoPadrao * 2) {
                console.log('A comida queimou!');
            } else {
                console.log('Prato pronto!');
            }
            break;
        case 1:
            tempoPadrao = 10
            tempo = tempoPadrao * tempoDigitado
            if (tempo < tempoPadrao) {
                console.log('Tempo insuficiente!');
            } else if (tempo >= tempoPadrao * 3) {
                console.log('KABUMM!!');
            } else if (tempo >= tempoPadrao * 2) {
                console.log('A comida queimou!');
            } else {
                console.log('Prato pronto!');
            }
            break;
        case 3:
            tempoPadrao = 15
            tempo = tempoPadrao * tempoDigitado
            if (tempo < tempoPadrao) {
                console.log('Tempo insuficiente!');
            } else if (tempo >= tempoPadrao * 3) {
                console.log('KABUMM!!');
            } else if (tempo >= tempoPadrao * 2) {
                console.log('A comida queimou!');
            } else {
                console.log('Prato pronto!');
            }
            break;
        case 4:
            tempoPadrao = 12
            tempo = tempoPadrao * tempoDigitado
            if (tempo < tempoPadrao) {
                console.log('Tempo insuficiente!');
            } else if (tempo >= tempoPadrao * 3) {
                console.log('KABUMM!!');
            } else if (tempo >= tempoPadrao * 2) {
                console.log('A comida queimou!');
            } else {
                console.log('Prato pronto!');
            }
            break;
        default:
            console.log('Prato inexistente!');
            break;
    }
}
// Testes
superMicroondas(1, 4);
superMicroondas(2, 2);
superMicroondas(3, 3);
superMicroondas(4, 1);
superMicroondas(5, 2);
superMicroondas(6, 10);