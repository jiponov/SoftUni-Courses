package P03_Inheritance.EXE_01_Person;
// package EXE_01_Person;

import java.util.Scanner;


public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String name = scanner.nextLine();

        int age = Integer.parseInt(scanner.nextLine());

        Child child = new Child(name, age);

        System.out.println(child.getName());
        System.out.println(child.getAge());

    }
}