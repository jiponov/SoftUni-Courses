package P02_Encapsulation.LAB_02_SalaryIncrease;


public class Person {

    private String firstName;
    private String lastName;
    private int age;
    private double salary;


    Person(String firstName, String lastName, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }


    public Person(String firstName, String lastName, int age, double salary) {
        this(firstName, lastName, age);
        this.salary = salary;
    }


    String getFirstName() {
        return firstName;
    }

    int getAge() {
        return age;
    }

    public double getSalary() {
        return salary;
    }

    public void increaseSalary(double bonus) {
        double actualBonus = bonus;

        if (age < 30) {
            actualBonus /= 2;   // actualBonus = actualBonus / 2;
        }

        salary = salary * (1 + actualBonus / 100);
        // double newSalary = salary * (1 + actualBonus / 100);
        // salary = newSalary;
    }

    //    @Override
    //    public String toString() {
    //        return String.format("%s %s is %d years old.",
    //            firstName, lastName, age);
    //    }

    //    DecimalFormat df = new DecimalFormat("#.0##");
    //    return String.format("%s %s gets %s leva", this.firstName, this.lastName, df.format(this.salary));


    @Override
    public String toString() {
        return String.format("%s %s gets %.2f leva", firstName, lastName, salary);
    }

}