import java.util.Scanner;

// 100/100
public class SumNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int initialValue = Integer.parseInt(scanner.nextLine());
        int sum = 0;

        while (sum < initialValue) {
            int input = Integer.parseInt(scanner.nextLine());
            sum = sum + input;
        }

        System.out.println(sum);
    }
}