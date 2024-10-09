package P03_Inheritance.EXE_05_Restaurant;

import java.math.BigDecimal;

public class Dessert extends Food {

    private double calories;

    public Dessert(String name, BigDecimal price, double grams, double calories) {
        super(name, price, grams);
        this.calories = calories;    // OR: this.setCalories(calories);
    }

    public double getCalories() {
        return calories;
    }
}