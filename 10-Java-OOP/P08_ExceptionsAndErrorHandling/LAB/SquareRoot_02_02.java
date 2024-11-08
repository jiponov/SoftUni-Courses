package P08_ExceptionsAndErrorHandling.LAB;

import java.util.*;


public class SquareRoot_02_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // входни данни
        try {
            // но може да имаме NFE
            int number = Integer.parseInt(scanner.nextLine());
            // но може да имаме AE
            double sqrtResult = calculateSqrt(number);

            System.out.printf("%.2f%n", sqrtResult);


            // catch -вам  NFE и AE
        } catch (NumberFormatException | ArithmeticException ex) {
            // NumberFormatException:  входните данни не са ми число
            // или  (символът  |  е или при грешките)
            // ArithmeticException:  данните са число, НО числото е отрицателно
            System.out.println("Invalid");


        } finally {
            System.out.println("Goodbye");
        }

    }


    private static double calculateSqrt(int number) {
        if (number < 0) {
            throw new ArithmeticException("SQRT is invalid for negative.numbers");
        }

        // ако няма грешка ВЪРНИ корен квадратен от числото горе в променливата:  sqrtResult
        return Math.sqrt(number);
    }
}