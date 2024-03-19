package P09_AssociativeArrays;

// 100/100

import java.util.*;
import java.util.Scanner;

import java.util.ArrayList;
import java.util.Map;
import java.util.LinkedHashMap;

public class CompanyUsers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, List<String>> map = new LinkedHashMap<>();

        String input = scanner.nextLine();
        while (!input.equals("End")) {
            String company = input.split(" -> ")[0];
            String employee = input.split(" -> ")[1];

            if (!map.containsKey(company)) {
                map.put(company, new ArrayList<>());
                map.get(company).add(employee);
            } else {
                List<String> allWorkersList = map.get(company);
                if (!allWorkersList.contains(employee)) {
                    allWorkersList.add(employee);
                }
            }

            input = scanner.nextLine();
        }

        for (Map.Entry<String, List<String>> entry : map.entrySet()) {
            System.out.println(entry.getKey());
            for (String ids : entry.getValue()) {
                System.out.println("-- " + ids);
            }
        }
    }
}