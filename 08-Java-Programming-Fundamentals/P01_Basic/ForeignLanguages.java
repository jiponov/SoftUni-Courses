package P01_Basic;

import java.util.Scanner;

public class ForeignLanguages {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        String output = "";

        if (input.equals("USA") || input.equals("England")) {
            output = "English";
        } else if (input.equals("Spain") || input.equals("Argentina") || input.equals("Mexico")) {
            output = "Spanish";
        } else {
            output = "unknown";
        }

        System.out.println(output);
    }
}

// 100/100