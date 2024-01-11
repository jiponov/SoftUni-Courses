import java.util.Scanner;

public class VowelsSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        int sum = 0;

        for (int i = 0; i < input.length(); i++) {
            char letter = input.charAt(i);

            if (letter == 'a') {
                sum += 1;
            } else if (letter == 'e') {
                sum += 2;
            } else if (letter == 'i') {
                sum += 3;
            } else if (letter == 'o') {
                sum += 4;
            } else if (letter == 'u') {
                sum += 5;
            }
        }

        System.out.println(sum);
    }
}

// 100/100
