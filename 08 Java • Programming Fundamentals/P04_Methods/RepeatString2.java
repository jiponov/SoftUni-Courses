package P04_Methods;

import java.util.Scanner;

public class RepeatString2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        int countRepeat = Integer.parseInt(scanner.nextLine());

        String output = buildText(input, countRepeat);
        // String output = repeated

        System.out.println(output);
    }

    public static String buildText(String input, int countRepeat) {
        String[] stringsArr = new String[countRepeat];

        for (int i = 0; i < countRepeat; i++) {
            stringsArr[i] = input;
        }

        String repeated = String.join("", stringsArr);
        return repeated;
    }
}


// 100/100