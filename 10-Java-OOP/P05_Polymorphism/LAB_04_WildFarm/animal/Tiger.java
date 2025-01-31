package P05_Polymorphism.LAB_04_WildFarm.animal;

import P05_Polymorphism.LAB_04_WildFarm.food.Food;
import P05_Polymorphism.LAB_04_WildFarm.food.Meat;


public class Tiger extends Feline {
    public Tiger(String name, double weight, String region) {
        super(name, weight, region, AnimalType.Tiger);
    }

    @Override
    public void makeSound() {
        System.out.println("ROAAR!!!");
    }

    @Override
    public boolean willEatFood(Food food) {
        return food instanceof Meat;
    }

}