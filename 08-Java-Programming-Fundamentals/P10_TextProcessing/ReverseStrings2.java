package P10_TextProcessing;

// 100/100

import java.util.*;
import java.util.Scanner;
import java.util.ArrayList;

public class ReverseStrings2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        String input = scanner.nextLine();
        while (!input.equals("end")) {
            String reversed = "";
            for (int i = input.length() - 1; i >= 0; i--) {
                reversed += input.charAt(i);
            }

            System.out.printf("%s = %s\n", input, reversed);

            input = scanner.nextLine();
        }
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