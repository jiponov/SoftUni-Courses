package P03_Inheritance.EXE_05_Restaurant;

import java.math.BigDecimal;

public class MainDish extends Food {

    public MainDish(String name, BigDecimal price, double grams) {
        super(name, price, grams);
    }
}