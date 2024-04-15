package P10_TextProcessing;

import java.math.BigInteger;
import java.util.Scanner;

public class MultiplyBigNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String bigNum = scanner.nextLine().replaceFirst("^0+(?!$)", "");
        int multipleNum = Integer.parseInt(scanner.nextLine());
        StringBuilder finalNum = new StringBuilder();

        int decimalReminder = 0;
        if (bigNum.isEmpty()) {
            bigNum = "0";
        }

        if (multipleNum == 0) {
            System.out.println(0);
            return;
        }

        for (int i = bigNum.length() - 1; i >= 0; i--) {
            int num = (int) bigNum.charAt(i) - 48;
            int currentSum = num * multipleNum;
            currentSum += decimalReminder;
            finalNum.append(currentSum % 10);
            decimalReminder = currentSum / 10;
        }

        if (decimalReminder > 0) {
            finalNum.append(decimalReminder);
        }

        System.out.println(finalNum.reverse());
    }
}
// 100/100

/*
String firstNumber = scanner.nextLine(); // "923847238931983192462832102"
        int secondNumber = Integer.parseInt(scanner.nextLine()); // 4

        StringBuilder result = new StringBuilder(); // "3"
        int over = 0; // на ум

        for (int position = firstNumber.length() - 1; position >= 0; position--) {
            // '2' char -> "2" string -> 2 int
            int digit = Integer.parseInt(firstNumber.charAt(position) + "");
            int product = digit * secondNumber + over; // 23

            over = product / 10;
            result.insert(0, product % 10);
        }

        System.out.println(result);


//        Умножение
          System.out.println(number1.multiply(number2));

//        // Събиране
//        System.out.println(number1.add(number2));
//        // Изваждане
//        System.out.println(number1.subtract(number2));
//        // Деление
//        System.out.println(number1.divide(number2));

 */