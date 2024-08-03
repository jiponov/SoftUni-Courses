package P06_DefiningClasses.EXE_02_CompanyRoster_01;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        // име на отдел  ->  списък служители
        Map<String, List<Employee>> departments = new HashMap<>();


        for (int i = 0; i < n; i++) {
            String[] tokens = scanner.nextLine().split("\\s+");

            String name = tokens[0];
            double salary = Double.parseDouble(tokens[1]);
            String position = tokens[2];
            String department = tokens[3];

            Employee employee = null;

            // 6 параметъра
            if (tokens.length == 6) {
                String email = tokens[4];
                int age = Integer.parseInt(tokens[5]);
                employee = new Employee(name, salary, position, department, email, age);
            }

            // 4 параметъра
            else if (tokens.length == 4) {
                employee = new Employee(name, salary, position, department);
            }

            // 5 параметъра
            else if (tokens.length == 5) {
                String fourthParameter = tokens[4];   // email or age
                if (fourthParameter.contains("@")) {
                    String email = fourthParameter;
                    employee = new Employee(name, salary, position, department, email);
                } else {
                    int age = Integer.parseInt(fourthParameter);
                    employee = new Employee(name, salary, position, department, age);
                }
            }

            // обект Employee имаме вече
            if (!departments.containsKey(department)) {
                departments.put(department, new ArrayList<>());
                departments.get(department).add(employee);
            } else {
                departments.get(department).add(employee);
            }
        }


        // отдел (средна заплата)  ->  списък със служители
        String maxAverageSalaryDepartment = departments
                .entrySet()
                .stream()
                .max(Comparator.comparingDouble(entry -> getAverageSalary(entry.getValue())))
                // get-ва entry от макса от горе като резултат
                // get-ва entry (отдел->списък служители):  отделът с най-висока заплата
                .get()
                .getKey();

        System.out.printf("Highest Average Salary: %s\n", maxAverageSalaryDepartment);
        List<Employee> employeeList = departments.get(maxAverageSalaryDepartment);
        employeeList.sort(Comparator.comparingDouble(employee -> employee.getSalary()));   // ascending by salary
        Collections.reverse(employeeList);   //  descending by salary

        for (Employee employee : employeeList) {
            System.out.println(employee);
        }

    }

    public static double getAverageSalary(List<Employee> employees) {
        // сума от заплатите/бр.служители

        double sum = 0;

        for (Employee employee : employees) {
            sum += employee.getSalary();
        }

        return sum / employees.size();
    }
}
