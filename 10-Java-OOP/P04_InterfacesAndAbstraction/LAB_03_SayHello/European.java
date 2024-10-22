package P04_InterfacesAndAbstraction.LAB_03_SayHello;
//package LAB_03_SayHello;

public class European implements Person {

    private String name;

    public European(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return this.name;
    }

    // sayHello тук е default от interface за европейците затова го няма ..... return Person.super.sayHello();
}
