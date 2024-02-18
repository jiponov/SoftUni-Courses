// 100/100

import java.util.Scanner;

public class GreaterNumber2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num1 = Integer.parseInt(scanner.nextLine());
        int num2 = Integer.parseInt(scanner.nextLine());
        int result = Math.max(num1, num2);
        System.out.println(result);
    }
}
