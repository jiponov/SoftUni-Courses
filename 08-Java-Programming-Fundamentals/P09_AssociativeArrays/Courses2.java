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

public class Courses2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, List<String>> map = new LinkedHashMap<>();

        String input = scanner.nextLine();

        while (!input.equals("end")) {
            String course = input.split(" : ")[0];     // split (" : ") -> ["{courseName}", "{personName}"]
            String name = input.split(" : ")[1];

            //ако курсът е нов -> връща празен списък
            //ако курсът е стар -> връща моментния списък с хора
            if (!map.containsKey(course)) {
                map.put(course, new ArrayList<>());
            }

            map.get(course).add(name);

            input = scanner.nextLine();
        }


        map
                .entrySet()
                .forEach(entry -> {
                    System.out.println(entry.getKey() + ": " + entry.getValue().size());
                    entry.getValue().forEach(studentName -> System.out.println("-- " + studentName));
                });
    }
}