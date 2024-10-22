package P04_InterfacesAndAbstraction.LAB_03_SayHello;
//package LAB_03_SayHello;

public interface Person {

    String getName();

    default String sayHello() {
        return "Hello!";
    }
}
