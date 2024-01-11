import java.util.Scanner;

public class OddEvenSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        int res1 = 0;
        int res2 = 0;

        for (int i = 1; i <= n; i++) {
            int num1 = Integer.parseInt(scanner.nextLine());
            if (i % 2 == 0) {
                res1 += num1;
            } else {
                res2 += num1;
            }
        }

        if (res1 == res2) {
            System.out.printf("Yes %nSum = %d", res1);
        } else {
            System.out.printf("No %nDiff = %d", Math.abs(res1 - res2));
        }
    }
}

// 100/100