package P04_InterfacesAndAbstraction.LAB_05_BorderControl;
//package LAB_05_BorderControl;


public class Robot implements Identifiable {


    private String model;
    private String id;


    public Robot(String model, String id) {


        this.model = model;
        this.id = id;
    }


    @Override
    public String getId() {

        return id;
    }


    public String getModel() {

        return model;
    }

}