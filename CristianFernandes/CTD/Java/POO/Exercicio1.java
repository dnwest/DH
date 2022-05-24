import java.util.Scanner;

public class Exercicio1 {
    public  static void main(String[] args){
        Scanner entrada = new Scanner(System.in);
        int numero = 0, cont = 0;

        System.out.print("Digite um numero para ver se e primo: ");
        numero = entrada.nextInt();

        for(int i=1; i<=numero; i++){
            if(numero % i == 0){
                cont++;
            }
        }
        if (cont == 2){
            System.out.println("O numero " +numero+ " e primo");
        }else{
            System.out.println("O numero " +numero+ " nao e primo");
        }
    }
}



