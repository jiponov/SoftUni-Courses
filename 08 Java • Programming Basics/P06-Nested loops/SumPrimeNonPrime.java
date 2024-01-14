import java.util.Scanner;

public class SumPrimeNonPrime {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        int sum1 = 0;
        int sum2 = 0;

        while (!input.equals("stop")) {
            int number = Integer.parseInt(input);
            int counter = 0;

            if (number < 0) {
                System.out.println("Number is negative.");
            } else {
                for (int i = 1; i <= number; i++) {
                    if (number % i == 0) {
                        counter++;
                    }
                }

                if (counter == 2) {
                    sum1 += number;
                } else {
                    sum2 += number;
                }
            }

            input = scanner.nextLine();
        }

        System.out.printf("Sum of all prime numbers is: %d%n", sum1);
        System.out.printf("Sum of all non prime numbers is: %d", sum2);
    }
}

//100/100