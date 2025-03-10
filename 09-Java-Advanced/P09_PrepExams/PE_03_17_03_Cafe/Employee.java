package P09_PrepExams.PE_03_17_03_Cafe;

public class Employee {

    // полета  ->  характеристики
    private String name;
    private int age;
    private String country;



    // методи
    // конструктор  ->  метод, чрез който създаваме обекти от класа
    // ALT + INSERT
    public Employee(String name, int age, String country) {
                                 // нов празен обект се създава
        this.name = name;        // null
        this.age = age;          // 0
        this.country = country;  // null
    }



    // Getters & Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }



    // toString  ->  представя всеки обект от класа под формата на текст
    @Override
    public String toString() {
        // "Employee: {name}, {age} from {country}"
        return String.format("Employee: %s, %d from %s", this.name, this.age, this.country);
    }
}