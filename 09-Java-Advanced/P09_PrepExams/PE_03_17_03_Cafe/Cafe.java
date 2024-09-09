package P09_PrepExams.PE_03_17_03_Cafe;

import java.util.ArrayList;
import java.util.List;

public class Cafe {

    // полета -> характеристики
    private String name;    // ИМЕ НА КАФЕНЕто
    private int capacity;   // КАПАЦИТЕТ на КАФЕНЕто

    // списък с обекти от класа Employee  -  това са списък със служителите (employees collection)
    private List<Employee> employees;


    // методи  ->  поведение

    // конструктор
    public Cafe(String name, int capacity) {
        // нов празен обект се създава
        this.name = name;   // null
        this.capacity = capacity;   // 0
        this.employees = new ArrayList<>();
    }


    // приема обект employee от клас Employee
    public void addEmployee(Employee employee) {
        // МОГА да добавям служители ако текущия брой  <  капацитета на кафенето
        // не мога да добавям текущия брой  >=  капацитета

        if (this.employees.size() < this.capacity) {   // да си добавя служителя ако има място за него в кафенето
            this.employees.add(employee);
        }
    }


    // приема ИМЕ на служител за премахване и ВРЪЩА boolean true/false
    public boolean removeEmployee(String name) {

        for (Employee employee : this.employees) {
            // ако ДАДЕН служител от списъка му ВЗЕМА името, и то съвпада с ПОДАДЕНОТО горе ИМЕ което ТЪРСЯ
            if (employee.getName().equals(name)) {
                this.employees.remove(employee);
                return true;
            }
        }

        // преминали сме през всички служители и НЕ сме намерили служител с даденото име.
        return false;
    }


    public Employee getOldestEmployee() {

        // 1 начин
        // първоначално най-възрастния служител е null
        // Employee oldestEmployee = null;
        Employee oldestEmployee = new Employee("", 0, "");    // най-възрастния служител

        for (Employee employee : this.employees) {
            if (employee.getAge() > oldestEmployee.getAge()) {
                oldestEmployee = employee;
            }
        }

        return oldestEmployee;   // ВРЪЩА обекта от класа Employee


        // 2 начин
        /*
        return this.employees.stream().max(Comparator.comparingInt(Employee::getAge)).get();
        */


        // 3 начин
        /*
        return this.employees.stream().max((e1, e2) -> Integer.compare(e1.getAge(), e2.getAge())).get();
        */
    }


    public Employee getEmployee(String name) {
        for (Employee employee : this.employees) {
            if (employee.getName().equals(name)) {
                return employee;
            }
        }

        // преминали през всички служители и не сме намерили служител с даденото име
        return null;
    }


    public int getCount() {
        return this.employees.size();
    }


    public String report() {

        // 1 начин  -  конкатенация на стрингове:
        String result = "Employees working at Cafe " + this.name + ":\n";

        for (Employee e : this.employees) {
            result += e.toString() + "\n";
        }

        return result;


        // 2 начин  -  String.join():
        /*
        String result = "Employees working at Cafe " + this.name + ":\n";

        result += String.join("\n", this.employees.stream().map(Employee::toString).collect(Collectors.toList()));
        result += "\n";    // Add the final newline

        return result;
        */


        // 3 начин  -  String Builder
        /*
        StringBuilder stringBuilder = new StringBuilder();

        // .append(System.lineSeparator())   -  ДОБАВЯ НОВ РЕД
        stringBuilder.append("Employees working at Cafe " + this.name + ":").append(System.lineSeparator());
        this.employees.forEach(e -> stringBuilder.append(e.toString()).append(System.lineSeparator()));

        return stringBuilder.toString();
        */
    }
}