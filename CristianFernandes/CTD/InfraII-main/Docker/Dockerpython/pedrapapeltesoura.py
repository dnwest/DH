#encoding:UTF-8
import random
userScore = 0
pcScore = 0
totalScore = 0

def percent():
        if totalScore > 0: 
            x = ((totalScore - pcScore) / totalScore) * 100
            return x
        elif totalScore == 0:
            x = 0
            return x

while True: 
    aleatorio = random.randrange(0, 4)
    escolhaPc = ""
    print("1)Pedra")
    print("2)Papel")
    print("3)Tesoura")
    print("4)Spock")
    print("5)Lagarto")
    print("6) Show Scores")
    print("7)Sair do Programa")
    opcao = int(input("O que você escolhe: "))
    
    if opcao == 1:
        escolhaUsuario = "pedra"
    elif opcao == 2:
        escolhaUsuario = "papel"
    elif opcao == 3:
        escolhaUsuario = "tesoura"
    elif opcao == 4:
        escolhaUsuario = "Spock"
    elif opcao == 5:
        escolhaUsuario = "Lagarto"
    elif opcao == 6:
        print ("Pontuações: ")
        print ("Usuário: ", userScore)
        print ("Pc: ", pcScore)
        print ("Porcentagem de vitórias: ", percent(), "% " )
    elif opcao == 7:
        print ("Nos vemos!")
        break
    else:
        print ("Valor Invalido")
        continue
        
    print("Tua escolha: ", escolhaUsuario)   
    if aleatorio == 0:
        escolhaPc = "pedra"
    elif aleatorio == 1:
        escolhaPc = "papel"
    elif aleatorio == 2:
        escolhaPc = "tesoura"
    elif aleatorio == 3:
        escolhaPc = "Spock"
    elif aleatorio == 4:
        escolhaPc = "Lagarto"        
    print("PC escolheu: ", escolhaPc)
    print("...")

    if escolhaPc == "pedra" and escolhaUsuario == "papel":
        print("Ganhou, papel cobre pedra")
        pcWin = 1
    elif escolhaPc == "papel" and escolhaUsuario == "tesoura":
        print("Ganhou, tesoura corta papel")
        pcWin = 1
    elif escolhaPc == "tesoura" and escolhaUsuario == "pedra":
        print("Ganhou, pedra amassa tesoura")
        pcWin = 1
    elif escolhaPc == "Spock" and escolhaUsuario == "tesoura":
        print("Ganhou, Spock quebra tesoura")
        pcWin = 1   
    elif escolhaPc == "lagarto" and escolhaUsuario == "Spock":
        print("Ganhou, lagarto envenena Spock")
        pcWin = 1 
    

    if escolhaUsuario == "pedra" and escolhaPc == "papel":
        print("Perdeu, papel cobre pedra")
        userWin = 1
    elif escolhaUsuario == "papel" and escolhaPc == "tesoura":
        print("Perdeu, tesoura corta papel")
        userWin = 1
    elif escolhaUsuario == "tesoura" and escolhaPc == "pedra":
        print("Perdeu, pedra amassa tesoura")
        userWin = 1
    elif escolhaUsuario == "lagarto" and escolhaPc == "pedra":
        print("Perdeu, pedra esmaga lagarto")
        userWin = 1
    elif escolhaUsuario == "Spock" and escolhaPc == "pedra":
        print("Perdeu, Spock vaporiza pedra")
        userWin = 1   
    elif escolhaPc == escolhaUsuario:
        print("Empate")
    again = input("Jogar novamente? s/n: ")
    if 's' in again:
        continue
    elif 'n' in again:
        print("Nos vemos!")
        break
    else:
        print("Valor Invalido")

        

userScore = userScore + userWin
pcScore = pcScore + pcWin
totalScore = userScore + pcScore


 
