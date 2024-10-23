package P04_InterfacesAndAbstraction.LAB_04_SayHelloExtended;
//package LAB_04_SayHelloExtended;


public abstract class BasePerson implements Person {


    private String name;


    protected BasePerson(String name) {

        //this.name = name;
        this.setName(name);
    }


    private void setName(String name) {

        this.name = name;

    }


    @Override
    public String getName() {

        return this.name;
    }


    @Override
    public String sayHello() {

        return "Hello!";
    }

}