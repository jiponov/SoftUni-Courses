package P06_DefiningClasses.LAB_02_Constructors;

public class Car {

    // полета -> характеристики
    private String brand;
    private String model;
    private int horsePower;


    // методи -> действия

    // constructor -> метод, чрез който създаваме обекти


    // (1)  constructor по поздразбиране / default constructor - вграден
    public Car() {
        // празен обект:   Car car = new Car();   празен обект от клас Car

        // brand = null
        // model = null
        // horsePower = 0
    }

    // (2.f.)  constructor с параметри
    public Car(String brand) {
        // празен обект
        // brand = null
        // model = null
        // horsePower = 0

        this.setBrand(brand);
        this.setModel("unknown");
        this.setHorsePower(-1);
    }


    // (2.b.)  constructor с параметри
    public Car(String brand, String model) {
        // нов празен обект

        // brand = null
        // model = null
        // horsePower = 0

        this.brand = brand;
        this.model = model;
    }


    // (2.c.)  constructor chaining:  2.c ПРИЕМА constructor 2.b.
    public Car(String brand, String model, int hp) {
        // нов празен обект

        // brand = null
        // model = null
        // horsePower = 0

        this(brand, model);
        this.horsePower = hp;
    }

    /*
    // (2.a.  MAIN  )  constructor с параметри
    public Car(String brand, String model, int hp) {
        // нов празен обект

        // brand = null
        // model = null
        // horsePower = 0

        this.setBrand(brand);
        this.setModel(model);
        this.setHorsePower(hp);
     }



    // (2.e.)  constructor с параметри
    public Car(String brand, String model, int hp) {
        // нов празен обект

        // brand = null
        // model = null
        // horsePower = 0

        this(brand);
        this.setModel(model);
        this.setHorsePower(hp);
    }
    */



    /*
    // (2.a.)  constructor с параметри
    public Car(String brand, String model, int hp) {
        // нов празен обект

        // brand = null
        // model = null
        // horsePower = 0

        this.brand = brand;
        this.model = model;
        this.horsePower = hp;
    }


    // (2.d.)  constructor с параметри
    public Car(String brand, String model) {
        // нов празен обект

        // brand = null
        // model = null
        // horsePower = 0

        this.setBrand(brand);
        this.setModel(model);
    }
     */



    // getters / accessors -> методи,  които осигуряват достъп до полетата и взимат стойността в тях
    // 1. getter на полето brand -> върна стойността, която имам срещу полето brand
    public String getBrand() {
        return this.brand;
    }

    // 2. getter на полето model -> върна стойността, която имам срещу полето model
    public String getModel() {
        return this.model;
    }

    // 3. getter на полето horsePower -> върна стойността, която имаме срещу полето horsePower
    public int getHorsePower() {
        return this.horsePower;
    }

    // setters / mutators -> методи, чрез които да задаваме стойност на полетата
    // 1. setter на полето brand
    public void setBrand(String brand) {
        this.brand = brand;
    }

    // 2. setter на полето model
    public void setModel(String model) {
        this.model = model;
    }

    // 3. setter на полето horsePower
    public void setHorsePower(int horsePower) {
        this.horsePower = horsePower;
    }

    // вградени методи -> toString, equals, hashCode

    // 1. toString -> представя обекта под формата на текст -> "package.class@address"
    @Override
    public String toString() {
        //"The car is: Chevrolet Impala - 390 HP."
        return String.format("The car is: %s %s - %d HP.",
                this.getBrand(), this.getModel(), this.getHorsePower());
    }

    // 2. equals -> метод, който сравняваме обекти

    // 3. hashCode -> метод, който ни дава цифровата репрезентация на един обект
}