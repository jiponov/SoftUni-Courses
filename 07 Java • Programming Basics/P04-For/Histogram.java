import java.util.Scanner;

public class Histogram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        int counterP1 = 0;
        int counterP2 = 0;
        int counterP3 = 0;
        int counterP4 = 0;
        int counterP5 = 0;

        for (int i = 1; i <= n; i++) {
            int num = Integer.parseInt(scanner.nextLine());

            if (num >= 800) {
                counterP5++;
            } else if (num >= 600) {
                counterP4++;
            } else if (num >= 400) {
                counterP3++;
            } else if (num >= 200) {
                counterP2++;
            } else {
                counterP1++;
            }
        }

        double resP1 = (counterP1 / (n * 1.0)) * 100;
        double resP2 = (counterP2 / (n * 1.0)) * 100;
        double resP3 = (counterP3 / (n * 1.0)) * 100;
        double resP4 = (counterP4 / (n * 1.0)) * 100;
        double resP5 = (counterP5 / (n * 1.0)) * 100;

        System.out.printf("%.2f%%%n", resP1);
        System.out.printf("%.2f%%%n", resP2);
        System.out.printf("%.2f%%%n", resP3);
        System.out.printf("%.2f%%%n", resP4);
        System.out.printf("%.2f%%%n", resP5);
    }
}
//100/100
