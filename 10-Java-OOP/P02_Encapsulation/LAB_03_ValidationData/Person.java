package P02_Encapsulation.LAB_03_ValidationData;

public class Person {

    private String firstName;
    private String lastName;
    private int age;
    private double salary;


    Person(String firstName, String lastName, int age) {
        setFirstName(firstName);
        setLastName(lastName);
        setAge(age);
    }

    public Person(String firstName, String lastName, int age, double salary) {
        this(firstName, lastName, age);
        setSalary(salary);
    }


    String getFirstName() {
        return firstName;
    }

    private void setFirstName(String firstName) {
        if (firstName.length() < 3) {
            throw new IllegalArgumentException("First name cannot be less than 3 symbols");
        }

        // АКО НЕ ХВЪРЛИ exception, ТО присвояваме стойност
        this.firstName = firstName;
    }


    private void setLastName(String lastName) {
        if (lastName.length() < 3) {
            throw new IllegalArgumentException("Last name cannot be less than 3 symbols");
        }

        // АКО НЕ ХВЪРЛИ exception, ТО присвояваме стойност
        this.lastName = lastName;
    }


    int getAge() {
        return age;
    }

    private void setAge(int age) {
        if (age < 1) {
            throw new IllegalArgumentException("Age cannot be zero or negative integer");
        }

        // АКО НЕ ХВЪРЛИ exception, ТО присвояваме стойност
        this.age = age;
    }

    public double getSalary() {
        return salary;
    }

    private void setSalary(double salary) {
        if (salary < 460) {
            throw new IllegalArgumentException("Salary cannot be less than 460 leva");
        }

        // АКО НЕ ХВЪРЛИ exception, ТО присвояваме стойност
        this.salary = salary;
    }


    public void increaseSalary(double bonus) {
        double actualBonus = bonus;

        if (age < 30) {
            actualBonus /= 2;   // actualBonus = actualBonus / 2;
        }

        double newSalary = salary * (1 + actualBonus / 100);
        setSalary(newSalary);
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