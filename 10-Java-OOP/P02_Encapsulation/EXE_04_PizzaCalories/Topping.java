package P02_Encapsulation.EXE_04_PizzaCalories;
// package EXE_04_PizzaCalories;


public class Topping {

    private String toppingType;
    private double weight;


    public Topping(String toppingType, double weight) {
        setToppingType(toppingType);
        setWeight(weight);
    }


    private void setToppingType(String toppingType) {
        if (!toppingType.equals("Meat") && !toppingType.equals("Veggies") && !toppingType.equals("Cheese") && !toppingType.equals("Sauce")) {

            String message = String.format("Cannot place %s on top of your pizza.", toppingType);
            throw new IllegalArgumentException(message);
        }

        this.toppingType = toppingType;
    }

    private void setWeight(double weight) {
        // [1-50]
        if (weight < 1 || weight > 50) {

            String message = String.format("%s weight should be in the range [1..50].", toppingType);
            throw new IllegalArgumentException(message);
        }

        this.weight = weight;
    }


    public double calculateCalories() {
        //(2 * грамаж) * коеф. на типа на топинга = брой кал. за топинга
        double coefficientToppingType = 0;

        if (toppingType.equals("Meat")) {
            coefficientToppingType = 1.2;
        } else if (toppingType.equals("Veggies")) {
            coefficientToppingType = 0.8;
        } else if (toppingType.equals("Cheese")) {
            coefficientToppingType = 1.1;
        } else if (toppingType.equals("Sauce")) {
            coefficientToppingType = 0.9;
        }

        return (2 * weight) * coefficientToppingType;
    }

}