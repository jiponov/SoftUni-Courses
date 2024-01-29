import java.util.Scanner;

public class Combinations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number = Integer.parseInt(scanner.nextLine());
        int results = 0;
        // number = a + b + c;

        for (int a = 0; a <= number; a++) {
            for (int b = 0; b <= number; b++) {
                for (int c = 0; c <= number; c++) {
                    if (a + b + c == number) {
                        results++;
                    }
                }
            }
        }

        System.out.println(results);
    }
}
//100/100