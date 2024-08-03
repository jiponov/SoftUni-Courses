package P06_DefiningClasses.EXE_02_CompanyRoster_01;

public class Employee {

    // х-ки:  name,salary,position,department,email,age

    // mandatory
    private String name;
    private double salary;
    private String position;
    private String department;

    // optional
    private String email;
    private int age;


    // CONSTRUCTOR
    // 4 параметъра
    public Employee(String name, double salary, String position, String department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.age = -1;
        this.email = "n/a";
    }

    // 6 параметъра
    public Employee(String name, double salary, String position, String department, String email, int age) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = age;
    }

    // 5 параметъра;  нямаме age
    public Employee(String name, double salary, String position, String department, String email) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = -1;
    }

    // 5 параметъра;  нямаме email
    public Employee(String name, double salary, String position, String department, int age) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.age = age;
        this.email = "n/a";
    }

    // getter на полето SALARY
    public double getSalary() {
        return salary;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append(name + " ").append(String.format("%.2f", salary) + " ").append(email + " ").append(age + " ");
        return builder.toString();

    }
}
