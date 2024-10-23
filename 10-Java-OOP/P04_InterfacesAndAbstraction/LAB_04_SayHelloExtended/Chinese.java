package P04_InterfacesAndAbstraction.LAB_04_SayHelloExtended;
//package LAB_04_SayHelloExtended;


public class Chinese extends BasePerson {


    public Chinese(String name) {

        super(name);
    }


    @Override
    public String sayHello() {

        return "Djydjybydjy";
    }

}