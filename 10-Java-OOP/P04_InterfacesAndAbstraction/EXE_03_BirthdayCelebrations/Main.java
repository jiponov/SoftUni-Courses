package P04_InterfacesAndAbstraction.EXE_03_BirthdayCelebrations;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        List<Birthable> birthables = new ArrayList<>();

        // Citizen Peter 22 9010101122 10/10/1990
        // Pet Sharo 13/11/2005
        String command = scanner.nextLine();
        while (!command.equals("End")) {

            String[] data = command.split("\\s+");

            if (data[0].equals("Citizen")) {
                String citizenName = data[1];
                int age = Integer.parseInt(data[2]);
                String id = data[3];
                String citizenDateBirth = data[4];

                Birthable citizen = new Citizen(citizenName, age, id, citizenDateBirth);

                birthables.add(citizen);

            } else if (data[0].equals("Pet")) {
                String petName = data[1];
                String petDateBirth = data[2];

                Birthable pet = new Pet(petName, petDateBirth);

                birthables.add(pet);
            }

            command = scanner.nextLine();
        }


        String yearOfBirth = scanner.nextLine();

        birthables.stream()
                .filter(birthable -> birthable.getBirthDate().endsWith(yearOfBirth))
                .forEach(birthable -> System.out.println(birthable.getBirthDate()));

    }
}