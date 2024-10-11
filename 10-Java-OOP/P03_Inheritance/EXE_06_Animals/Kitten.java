package P03_Inheritance.EXE_06_Animals;

public class Kitten extends Cat {

    public Kitten(String name, int age) {
        super(name, age, "Female");
    }

    @Override
    public String produceSound() {
        return "Meow";
    }
}