package P03_Inheritance.EXE_06_Animals;

public class Frog extends Animal {

    public Frog(String name, int age, String gender) {
        super(name, age, gender);
    }

    @Override
    public String produceSound() {
        return "Ribbit";
    }
}