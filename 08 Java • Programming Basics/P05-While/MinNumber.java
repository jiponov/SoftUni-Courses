import java.util.Scanner;

public class MinNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        int min = Integer.MAX_VALUE;

        while (!input.equals("Stop")) {
            int value = Integer.parseInt(input);
            if (value < min) {
                min = value;
            }
            input = scanner.nextLine();
        }

        System.out.println(min);
    }
}

//100/100