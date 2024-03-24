package P09_AssociativeArrays;
// 100/100

import java.text.DecimalFormat;
import java.util.*;
import java.util.Scanner;

import java.util.stream.Collectors;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.TreeMap;

public class StudentAcademy {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        Map<String, List<Double>> map = new LinkedHashMap<>();
        int n = Integer.parseInt(scanner.nextLine());

        while (n > 0) {
            n--;
            String name = scanner.nextLine();
            double grade = Double.parseDouble(scanner.nextLine());

            if (!map.containsKey(name)) {
                map.put(name, new ArrayList<>());
            }

            map.get(name).add(grade);
        }

        //Map<String, Double> output = new LinkedHashMap<>();

        for (Map.Entry<String, List<Double>> entry : map.entrySet()) {
            double sum = 0.0;

            for (double el : entry.getValue()) {
                sum += el;
            }

            double avg = sum / entry.getValue().size();

            if (avg >= 4.50) {
                DecimalFormat df = new DecimalFormat("#.00");
                String formattedAvg = df.format(avg);

                System.out.println(entry.getKey() + " -> " + formattedAvg);
            }
        }
    }
}

/* -- DecimalFormat --

import java.text.DecimalFormat;

public class Main {
    public static void main(String[] args) {
        double num = 3.67;
        DecimalFormat df = new DecimalFormat("#.00"); // Enforces two decimal places
        String formattedNum = df.format(num);
        System.out.println("Formatted number: " + formattedNum);
    }
}


import java.text.DecimalFormat;

double num = 3.6789;
DecimalFormat df = new DecimalFormat("#.##");
DecimalFormat df = new DecimalFormat("#.00");   // Enforces two decimal places
double roundedNum = Double.parseDouble(df.format(num));
System.out.println("Rounded number: " + roundedNum);

*/