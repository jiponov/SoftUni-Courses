package P02_DataType;

import java.util.Scanner;

public class CharsToString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char firstSymbol = scanner.nextLine().charAt(0);
        char secondSymbol = scanner.nextLine().charAt(0);
        char thirdSymbol = scanner.nextLine().charAt(0);

        // OR: System.out.println("" + firstSymbol + secondSymbol + thirdSymbol);
        System.out.printf("%c%c%c", firstSymbol, secondSymbol, thirdSymbol);
    }
}

// 100/100