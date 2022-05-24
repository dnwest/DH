import java.util.Scanner;

public class Exercicio2 {

    public class Main {


        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.println("Digite o 1º número:");
            int n1 = scanner.nextInt();
            System.out.println("Digite o 2º número:");
            int n2 = scanner.nextInt();
            System.out.println("Digite o 3º número:");
            int n3 = scanner.nextInt();
            System.out.println(maiorNumero(n1,n2,n3));

        }

        private static String maiorNumero (int n1, int n2, int n3){
            int maiorNumero = 0;
            int numeros[] = {n1, n2, n3};
            for(int i =0; i <= 2; i++){
                if(numeros[i]> maiorNumero){
                    maiorNumero = numeros[i];
                }
            }
            return "O maior número entre os valores digitados foi:" + maiorNumero;
        }

    }
}
