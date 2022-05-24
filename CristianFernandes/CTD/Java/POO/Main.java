import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o seu nome:");
        String nome = scanner.next();
        System.out.println("Digite o seu sobrenome: ");
        String sobrenome = scanner.next();
        String iniciais = String.valueOf(nome.charAt(0)) + sobrenome.charAt(0);
        System.out.println("Digite o dia do seu nascimento: ");
        int dia = scanner.nextInt();
        System.out.println("DIgite o mês de seu nascimento: ");
        int mes = scanner.nextInt();
        System.out.println("Digite o ano de seu nascimento: ");
        int ano = scanner.nextInt();

        System.out.println("Seu nome é: " + nome + " " + iniciais + " " + sobrenome);
        System.out.println("Minha data de nascimento: " + dia +"/" + String.format("%02d", mes) + "/" + ano);

    }
}
