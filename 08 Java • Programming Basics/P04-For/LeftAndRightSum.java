import java.util.Scanner;

public class LeftAndRightSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        int leftSum = 0;
        int rightSum = 0;

        for (int i = 1; i <= n; i++) {
            int num1 = Integer.parseInt(scanner.nextLine());
            leftSum += num1;
        }

        for (int i = 1; i <= n; i++) {
            int num1 = Integer.parseInt(scanner.nextLine());
            rightSum += num1;
        }

        if (leftSum == rightSum) {
            System.out.printf("Yes, sum = %d", leftSum);
        } else {
            System.out.printf("No, diff = %d", Math.abs(leftSum - rightSum));
        }
    }
}

// 100/100
