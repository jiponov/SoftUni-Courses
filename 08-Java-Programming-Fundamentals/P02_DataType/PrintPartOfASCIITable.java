package P02_DataType;

import java.util.Scanner;

public class PrintPartOfASCIITable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int firstChar = Integer.parseInt(scanner.nextLine());
        int secondChar = Integer.parseInt(scanner.nextLine());

        for (int i = firstChar; i <= secondChar; i++) {
            char symbol = (char) i;             // cast

            if (i == secondChar) {
                System.out.printf("%c", symbol);
                break;
            }

            System.out.printf("%c ", symbol);
        }
    }
}

// 100/100