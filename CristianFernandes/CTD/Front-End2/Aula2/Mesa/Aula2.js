// 0 = Pedra
// 1 = Papel
// 2 = Tesoura

/* 
                                 Regras do Jogo
######################################################################################### 
#    Caso de empate     #   Jogador Venceu 1° Condição  # Computador Venceu 2° Condição #
#                       #                               #                               #
#      * 0 - 0          #          * 0 - 2              #           * 0 - 1             #
#      * 1 - 1          #          * 2 - 1              #           * 1 - 2             #
#      * 2 - 2          #          * 1 - 0              #           * 2 - 0             # 
#                       #                               #                               #
#########################################################################################
*/

function jogar(jogador, computador) {
    if (jogador = prompt("Faça a sua jogada! 0 = Pedar, 1 = Papel e 2 para Tesouta", 0),
        jogador != 0 && jogador != 1 && jogador != 2) {
        alert("Escolha uma opção válida")
    } else {
        computador = Math.floor(Math.random() * 3);
        switch (computador) {
            case 0:
                if (jogador == 0) {
                    alert('Empate!!');
                } else if (jogador == 1) {
                    alert('Jogador Ganhou!!')
                } else {
                    alert('Computador Ganhou!!')
                }
                break;
            case 1:
                if (jogador == 1) {
                    alert('Empate!!');
                } else if (jogador == 2) {
                    alert('Jogador Ganhou!!')
                } else {
                    alert('Computador Ganhou!!')
                }
                break;
            case 2:
                if (jogador == 2) {
                    alert('Empate!!');
                } else if (jogador == 0) {
                    alert('Jogador Ganhou!!')
                } else {
                    alert('Computador Ganhou!!')
                }
                break;
        }
        console.log(computador)
        console.log(jogador)
    }
}

jogar();