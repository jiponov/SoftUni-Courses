package P01_Basic;

import java.util.Scanner;

public class Ages {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int num = Integer.parseInt(scanner.nextLine());
        String output = "";

        if (num >= 0 && num <= 2) {
            output = "baby";
        } else if (num >= 3 && num <= 13) {
            output = "child";
        } else if (num >= 14 && num <= 19) {
            output = "teenager";
        } else if (num >= 20 && num <= 65) {
            output = "adult";
        } else if (num > 65) {
            output = "elder";
        }

        System.out.println(output);
    }
}

// 100/100