package P04_InterfacesAndAbstraction.LAB_03_SayHello;
//package LAB_03_SayHello;

public class Chinese implements Person {

    private String name;

    public Chinese(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return this.name;
    }

    @Override
    public String sayHello() {
        return "Djydjybydjy";
    }
}
