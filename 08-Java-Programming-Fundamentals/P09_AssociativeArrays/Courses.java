package P09_AssociativeArrays;
// 100/100

import java.util.*;
import java.util.Scanner;

import java.util.stream.Collectors;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.TreeMap;

public class Courses {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, Integer> courses = new LinkedHashMap<>();
        Map<String, List<String>> students = new LinkedHashMap<>();

        String input = scanner.nextLine();
        while (!input.equals("end")) {
            String module = input.split(" : ")[0];
            String name = input.split(" : ")[1];

            if (!courses.containsKey(module)) {
                courses.put(module, 0);
            }

            if (!students.containsKey(module)) {
                students.put(module, new ArrayList<>());
            }

            int count = courses.get(module);
            count++;
            courses.put(module, count);

            students.get(module).add(name);

            input = scanner.nextLine();
        }


        for (Map.Entry<String, Integer> course : courses.entrySet()) {
            System.out.println(course.getKey() + ": " + course.getValue());

            students
                    .entrySet()
                    .stream()
                    .filter(x -> x.getKey().equals(course.getKey()))
                    .map(Map.Entry::getValue)
                    .forEach(x -> {
                        for (String el : x) {
                            System.out.println("-- " + el);
                        }
                    });
        }
    }
}