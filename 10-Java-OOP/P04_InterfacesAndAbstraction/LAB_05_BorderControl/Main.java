package P04_InterfacesAndAbstraction.LAB_05_BorderControl;
//package LAB_05_BorderControl;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // Identifiable:  защото е INTERFACE и го имат и Robot и Ciziten понеже го implements.
        List<Identifiable> listInhabitants = new ArrayList<>();

        String input = scanner.nextLine();
        while (!input.equals("End")) {
            String[] tokens = input.split("\\s+");

            Identifiable nextObj = null;

            if (tokens.length == 2) {
                String model = tokens[0];
                String id = tokens[1];

                nextObj = new Robot(model, id);

            } else {
                String name = tokens[0];
                int age = Integer.parseInt(tokens[1]);
                String id = tokens[2];

                nextObj = new Citizen(name, age, id);
            }

            listInhabitants.add(nextObj);

            input = scanner.nextLine();
        }

        String badId = scanner.nextLine();

        listInhabitants
                .stream()
                .map(e -> e.getId())
                .filter(id -> id.endsWith(badId))
                .forEach(e -> System.out.println(e));

        /* OR:
        listInhabitants
                .stream()
                .map(Identifiable::getId)
                .filter(id -> id.endsWith(badId))
                .forEach(System.out::println);
        */
    }

}