package P02_Encapsulation.EXE_03_ShoppingSpree_01;
// package EXE_03_ShoppingSpree_01;
// 100/100

import java.util.stream.Collectors;
import java.util.*;
import java.util.stream.*;


public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);


        List<Person> people = new ArrayList<>();
        List<Product> products = new ArrayList<>();
        Map<Person, List<Product>> productsPerPerson = new LinkedHashMap<>();



        try {
            // Peter=11;George=4
            String peopleData = scanner.nextLine();
            // Bread=10;Milk=2
            String productData = scanner.nextLine();


            // Peter=11
            for (String tokens : peopleData.split(";")) {

                String name = tokens.split("=")[0];
                double money = Double.parseDouble(tokens.split("=")[1]);

                Person person = new Person(name, money);
                people.add(person);
            }


            // Bread=10
            for (String tokens : productData.split(";")) {

                String name = tokens.split("=")[0];
                double cost = Double.parseDouble(tokens.split("=")[1]);

                Product product = new Product(name, cost);
                products.add(product);
            }


        } catch (IllegalArgumentException ex) {
            System.out.println(ex.getMessage());
            return;
        }



        String command = scanner.nextLine();
        while (!command.equals("END")) {

            // George Milk
            String personName = command.split("\\s+")[0];    // George
            String productName = command.split("\\s+")[1];   // Milk

            // Проверявам дали в един списък има обект, който отговаря на дадено условие.
            // products.stream().anyMatch(product -> product.getName().equals(productName))

            // .filter(p -> p.getName().equals(personName)) -> остави хората, които са с това име
            // .findFirst() -> намери първият, който е с това име
            // .get() -> върни ми резултата


            Person personFound = people
                    .stream()
                    .filter(p -> p.getName().equals(personName))
                    .findFirst()
                    .get();


            Product productFound = products
                    .stream()
                    .filter(p -> p.getName().equals(productName))
                    .findFirst()
                    .get();


            try {
                if (personFound != null && productFound != null) {
                    personFound.buyProduct(productFound);
                }

            } catch (IllegalArgumentException ex) {
                System.out.println(ex.getMessage());
            }


            command = scanner.nextLine();
        }



        for (Person p : people) {

            List<Product> productsPerOnePerson = p.getProducts();     // Collections.unmodifiableList()
            System.out.print(p.getName() + " – ");

            if (productsPerOnePerson.isEmpty()) {
                System.out.println("Nothing bought");
            } else {
                List<String> namesProducts = productsPerOnePerson
                        .stream()
                        .map(Product::getName)
                        .collect(Collectors.toList());

                System.out.println(String.join(", ", namesProducts));
            }
        }



    }
}