import java.util.Locale;
import java.util.Scanner;

public class Exercicio4 {

    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        Scanner scan = new Scanner(System.in);

        System.out.println("Enter a number");
        int n = scan.nextInt();
        int count = 0;

        for(int a = 1;a<=n;a++) {
            if ((a%2!=0) && (a%3!=0)){
                System.out.println(Integer.valueOf(a));
            }
            if(n % a == 0){
                count++;
                System.out.println(Integer.valueOf(count));
            }
        }





    }

}
