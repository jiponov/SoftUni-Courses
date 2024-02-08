package P04_Methods;

import java.util.Scanner;

public class SignOfIntegerNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int number = Integer.parseInt(scanner.nextLine());
        printTypeOfInteger(number);
    }

    public static void printTypeOfInteger(int number) {
        if (number < 0) {
            //negative number
            System.out.printf("The number %d is negative.", number);
        } else if (number == 0) {
            //zero
            System.out.printf("The number %d is zero.", number);
        } else {
            //positive
            System.out.printf("The number %d is positive.", number);
        }
    }
}

// 100/100

/*

    метод, който отпечатва вида на цялото число
    < 0 -> negative
    == 0 -> zero
    > 0 -> positive
    public static {тип на метода} {име на метод} ({параметри}) { }

 */