package P01_Basic;

import java.util.Scanner;

public class StudentInformation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String name = scanner.nextLine();
        int age = Integer.parseInt(scanner.nextLine());
        double avgGrade = Double.parseDouble(scanner.nextLine());

        String output = String.format("Name: %s, Age: %d, Grade: %.2f", name, age, avgGrade);
        System.out.println(output);
    }
}

// 100/100