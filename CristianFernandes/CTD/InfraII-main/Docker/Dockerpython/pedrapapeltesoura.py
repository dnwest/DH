#encoding:UTF-8
import random

pcWin = 0
userWin = 0
totalScore = 0

def percent():
        if totalScore > 0: 
            x = ((totalScore - pcWin) / totalScore) * 100
            return x
        elif totalScore == 0:
            x = 0
            return x

while True:
    totalScore = userWin + pcWin 
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
        escolhaUsuario = "lagarto"
    elif opcao == 6:
        print ("Pontuações: ")
        print ("Usuário: ", userWin)
        print ("Pc: ", pcWin)
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
        escolhaPc = "lagarto"        
    print("PC escolheu: ", escolhaPc)
    print("...")

    if escolhaPc == "pedra" and escolhaUsuario == "papel":
        print("Ganhou, papel cobre pedra")
        userWin += 1
    elif escolhaPc == "pedra" and escolhaUsuario == "Spock":
        print("Ganhou, Spock vaporiza pedra")
        userWin += 1                       
    elif escolhaPc == "papel" and escolhaUsuario == "tesoura":
        print("Ganhou, tesoura corta papel")
        userWin += 1
    elif escolhaPc == "papel" and escolhaUsuario == "lagarto":
        print("Ganhou, lagarto come papel")
        userWin += 1     
    elif escolhaPc == "tesoura" and escolhaUsuario == "pedra":
        print("Ganhou, pedra amassa tesoura")
        userWin += 1
    elif escolhaPc == "tesoura" and escolhaUsuario == "Spock":
        print("Ganhou, Spock quebra tesoura")
        userWin += 1
    elif escolhaPc == "Spock" and escolhaUsuario == "lagarto":
        print("Ganhou, lagarto envenena Spock")
        userWin += 1
    elif escolhaPc == "lagarto" and escolhaUsuario == "pedra":
        print("Ganhou, pedra esmaga lagarto")
        userWin += 1 
    elif escolhaPc == "Spock" and escolhaUsuario == "papel":
        print("Ganhou, papel refuta Spock")
        userWin += 1
    elif escolhaPc == "lagarto" and escolhaUsuario == "tesoura":
        print("Ganhou, tesoura decapita lagarto")
        userWin += 1                 

    if escolhaUsuario == "pedra" and escolhaPc == "papel":
        print("Perdeu, papel cobre pedra")
        pcWin += 1  
    elif escolhaUsuario == "pedra" and escolhaPc == "Spock":
        print("Perdeu, Spock vaporiza pedra")
        pcWin += 1         
    elif escolhaUsuario == "papel" and escolhaPc == "tesoura":
        print("Perdeu, tesoura corta papel")
        pcWin += 1 
    elif escolhaUsuario == "papel" and escolhaPc == "lagarto":
        print("Perdeu, lagarto come papel")
        pcWin += 1         
    elif escolhaUsuario == "tesoura" and escolhaPc == "pedra":
        print("Perdeu, pedra amassa tesoura")
        pcWin += 1 
    elif escolhaUsuario == "tesoura" and escolhaPc == "Spock":
        print("Perdeu, Spock quebra tesoura")
        pcWin += 1         
    elif escolhaUsuario == "Spock" and escolhaPc == "papel":
        print("Perdeu, papel refuta Spock")
        pcWin += 1 
    elif escolhaUsuario == "Spock" and escolhaPc == "lagarto":
        print("Perdeu, lagarto envenena Spock")
        pcWin += 1                     
    elif escolhaUsuario == "lagarto" and escolhaPc == "pedra":
        print("Perdeu, pedra esmaga lagarto")
        pcWin += 1 
    elif escolhaUsuario == "lagarto" and escolhaPc == "tesoura":
        print("Perdeu, tesoura decapita lagarto")
        pcWin += 1 

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


 
