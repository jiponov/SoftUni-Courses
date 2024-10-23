package P04_InterfacesAndAbstraction.LAB_04_SayHelloExtended;
//package LAB_04_SayHelloExtended;


public class Bulgarian extends BasePerson {


    public Bulgarian(String name) {

        super(name);
    }


    @Override
    public String sayHello() {

        return "Здравей!";
    }

}