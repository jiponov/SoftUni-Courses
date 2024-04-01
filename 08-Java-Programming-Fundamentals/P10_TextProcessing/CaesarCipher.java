package P10_TextProcessing;

import java.util.Scanner;

public class CaesarCipher {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String text = scanner.nextLine(); // "Programming is cool!"
        StringBuilder encryptText = new StringBuilder(); // []

        // криптиране
        for (char symbol : text.toCharArray()) {
            // 'A' 65 -> 'D' 68
            char encryptSymbol = (char) (symbol + 3); // криптирания символ - CAST
            encryptText.append(encryptSymbol);
        }

        // криптирания текст
        System.out.println(encryptText);
    }
}