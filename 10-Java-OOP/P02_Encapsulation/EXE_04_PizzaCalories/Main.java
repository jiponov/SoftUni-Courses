package P02_Encapsulation.EXE_04_PizzaCalories;
// package EXE_04_PizzaCalories;

import java.util.*;


public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // пица
        String pizzaData = scanner.nextLine();
        String pizzaName = pizzaData.split(" ")[1];
        int toppingsNumber = Integer.parseInt(pizzaData.split(" ")[2]);
        Pizza pizza = new Pizza(pizzaName, toppingsNumber);

        // тесто
        String doughData = scanner.nextLine();
        String flourType = doughData.split(" ")[1];
        String bakingTechnique = doughData.split(" ")[2];
        double doughWeight = Double.parseDouble(doughData.split(" ")[3]);
        Dough dough = new Dough(flourType, bakingTechnique, doughWeight);

        pizza.setDough(dough);

        String toppingData = scanner.nextLine();

        while (!toppingData.equals("END")) {
            // топинг

            String toppingType = toppingData.split(" ")[1];
            double toppingWeight = Double.parseDouble(toppingData.split(" ")[2]);
            Topping topping = new Topping(toppingType, toppingWeight);
            pizza.addTopping(topping);

            toppingData = scanner.nextLine();
        }


        // пица  -  има тесто  - има с топинг
        System.out.printf("%s - %.2f", pizza.getName(), pizza.getOverallCalories());
    }
}