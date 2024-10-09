package P03_Inheritance.EXE_05_Restaurant;

import java.math.BigDecimal;


public class ColdBeverage extends Beverage {

    public ColdBeverage(String name, BigDecimal price, double milliliters) {
        super(name, price, milliliters);
    }
}