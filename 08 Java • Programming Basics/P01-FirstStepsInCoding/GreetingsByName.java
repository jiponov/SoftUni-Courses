// 100/100

import java.util.Scanner;

public class GreetingsByName {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // име от конзолата ВЪВЕДИ - запази в променлива
        // печатаме "Hello, <name>!"
        String name = scanner.nextLine();
        System.out.println("Hello, " + name + "!");
    }
}



