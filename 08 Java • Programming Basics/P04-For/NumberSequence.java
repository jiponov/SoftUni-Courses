import java.util.Scanner;

public class NumberSequence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        int biggest = Integer.MIN_VALUE;
        int smallest = Integer.MAX_VALUE;

        for (int i = 1; i <= n; i += 1) {
            int num = Integer.parseInt(scanner.nextLine());

            if (num > biggest) {
                biggest = num;
            }
            if (num < smallest) {
                smallest = num;
            }
        }

        System.out.printf("Max number: %d%n", biggest);
        System.out.printf("Min number: %d", smallest);
    }
}

// 100/100