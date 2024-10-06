package P03_Inheritance.EXE_01_Person;
// package EXE_01_Person;


public class Person {

    private String name;
    private int age;


    // Конструктор - различен от default
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }


    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }
}