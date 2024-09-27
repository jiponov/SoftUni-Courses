package P02_Encapsulation.EXE_02_AnimalFarm;
// package EXE_02_AnimalFarm;

import java.util.Scanner;


public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String name = scanner.nextLine();
        int age = Integer.parseInt(scanner.nextLine());

        Chicken chicken = new Chicken(name, age);

        System.out.println(chicken);    // chicken.toString();
    }
}



/*

try {
    Chicken chicken = new Chicken(name, age);
    System.out.println(chicken);

} catch (IllegalArgumentException ex) {
        System.out.println(ex.getMessage());
}

*/