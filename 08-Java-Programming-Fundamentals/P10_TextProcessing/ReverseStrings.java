package P10_TextProcessing;

// 100/100

import java.util.*;
import java.util.Scanner;
import java.util.ArrayList;

public class ReverseStrings {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<String> output = new ArrayList<>();

        String input = scanner.nextLine();
        while (!input.equals("end")) {
            String buildStr = "";
            for (int i = input.length() - 1; i >= 0; i--) {
                buildStr += input.charAt(i);
            }

            output.add(input + " = " + buildStr);

            input = scanner.nextLine();
        }

        String result = String.format(String.join("\n", output));
        System.out.println(result);
    }
}

/*
helLo
Softuni
bottle
end

helLo = oLleh
Softuni = inutfoS
bottle = elttob
*/