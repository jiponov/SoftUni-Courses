package P05_Polymorphism.LAB_04_WildFarm.animal;

import P05_Polymorphism.LAB_04_WildFarm.food.Food;
import P05_Polymorphism.LAB_04_WildFarm.food.Vegetable;


public class Mouse extends Mammal {
    public Mouse(String name, double weight, String region) {
        super(name, weight, region, AnimalType.Mouse);
    }

    @Override
    public void makeSound() {
        System.out.println("SQUEEEAAAK!");
    }

    @Override
    public boolean willEatFood(Food food) {
        return food instanceof Vegetable;
    }

}