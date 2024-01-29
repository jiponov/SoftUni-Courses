package P02_DataType;

import java.util.Scanner;

public class Elevator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        int people = Integer.parseInt(scanner.nextLine());

        // make it DOUBLE for precision:  (1.0 * n / people)
        int courses = (int) Math.ceil(1.0 * n / people);
        System.out.println(courses);
    }
}

// 100/100