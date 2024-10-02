package P02_Encapsulation.LAB_01_SortByNameAndAge;

class Person {

    private String firstName;
    private String lastName;
    private int age;


    Person(String firstName, String lastName, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }


    String getFirstName() {
        return firstName;
    }

    int getAge() {
        return age;
    }


    @Override
    public String toString() {

        return String.format("%s %s is %d years old.", firstName, lastName, age);
    }
}