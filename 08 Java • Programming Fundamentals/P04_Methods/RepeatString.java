package P04_Methods;

import java.util.Scanner;

public class RepeatString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        int countRepeat = Integer.parseInt(scanner.nextLine());

        String output = buildText(input, countRepeat);

        System.out.println(output);
    }

    public static String buildText(String input, int countRepeat) {
        String builtText = "";

        for (int count = 1; count <= countRepeat; count++) {
            builtText += input;   // builtText = builtText + input;
        }

        // връщаме новосъздадения текст на променливата OUTPUT
        return builtText;
    }
}


// 100/100