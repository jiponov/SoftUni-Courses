package P04_InterfacesAndAbstraction.LAB_04_SayHelloExtended;
//package LAB_04_SayHelloExtended;


public class European extends BasePerson {


    public European(String name) {

        super(name);
    }

    @Override
    public String sayHello() {
        return "Hello";
    }
}