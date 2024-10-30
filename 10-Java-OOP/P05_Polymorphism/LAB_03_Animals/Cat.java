package P05_Polymorphism.LAB_03_Animals;

public class Cat extends Animal {
    protected Cat(String name, String favouriteFood) {
        super(name, favouriteFood);
    }

    @Override
    public String explainSelf() {
        return super.explainSelf() + "\nMEEOW";
    }

}