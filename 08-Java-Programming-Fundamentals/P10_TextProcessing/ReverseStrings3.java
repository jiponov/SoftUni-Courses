package P10_TextProcessing;

// 100/100

import java.util.*;
import java.util.Scanner;
import java.util.ArrayList;

public class ReverseStrings3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        while (!input.equals("end")) {
            StringBuilder sb = new StringBuilder(input);
            sb.reverse();

            System.out.println(input + " = " + sb.toString());

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