package P02_Encapsulation.EXE_03_ShoppingSpree_02;

import java.util.*;
import java.util.stream.*;


public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        List<Person> people;
        List<Product> products;
        Map<Person, List<Product>> productsPerPerson = new HashMap<>();



        try {
            people = parsePeople(scanner.nextLine());
            products = parseProducts(scanner.nextLine());
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
            return;
        }



        String action = scanner.nextLine();
        while (!action.equals("END")) {
            String[] personAndProduct = action.split("\\s+");

            Person person = people.stream().filter(p -> p.getName().equals(personAndProduct[0])).findFirst().get();
            Product product = products.stream().filter(p -> p.getName().equals(personAndProduct[1])).findFirst().get();

            try {
                person.buyProduct(product);
                System.out.println(person.getName() + " bought " + product.getName());
            } catch (IllegalStateException e) {
                System.out.println(e.getMessage());
            }

            action = scanner.nextLine();
        }



        for (Person person : people) {
            List<Product> personProducts = person.getProducts();
            System.out.print(person.getName() + " – ");
            if (personProducts.isEmpty()) {
                System.out.println("Nothing bought");
            } else {
                List<String> productNames = personProducts
                        .stream()
                        .map(Product::getName)
                        .collect(Collectors.toList());

                System.out.println(String.join(", ", productNames));
            }
        }

    }



    private static List<Product> parseProducts(String productsString) {
        List<Product> products = new ArrayList<>();

        String[] peopleAsStrings = productsString.split(";");
        for (String personAsString : peopleAsStrings) {
            String[] nameAndMoney = personAsString.split("=");

            products.add(new Product(nameAndMoney[0], Double.parseDouble(nameAndMoney[1])));
        }

        return products;
    }

    private static List<Person> parsePeople(String peopleString) {
        List<Person> people = new ArrayList<>();

        String[] peopleAsStrings = peopleString.split(";");
        for (String personAsString : peopleAsStrings) {
            String[] nameAndMoney = personAsString.split("=");

            people.add(new Person(nameAndMoney[0], Double.parseDouble(nameAndMoney[1])));
        }

        return people;
    }

}