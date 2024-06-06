package P03_SetsAndMapsAdvanced;

import java.util.ArrayList;
import java.util.Map;
import java.util.TreeMap;

import java.util.*;

public class LAB_05_AverageStudentsGrades_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        Map<String, ArrayList<Double>> info = new TreeMap<>();

        for (int i = 1; i <= n; i++) {
            String[] studentInfo = scanner.nextLine().split("\\s+");
            String studentName = studentInfo[0];
            double studentGrade = Double.parseDouble(studentInfo[1]);

            info.putIfAbsent(studentName, new ArrayList<>());

            info.get(studentName).add(studentGrade);
        }


        info
                .entrySet()
                .stream()
                .forEach(entry -> {
                    double sum = 0;
                    for (int i = 0; i < entry.getValue().size(); i++) {
                        sum += entry.getValue().get(i);
                    }

                    double avgSum = sum / entry.getValue().size();

                    System.out.print(entry.getKey() + " -> ");

                    entry.getValue().forEach(e -> System.out.printf("%.2f ", e));
                    System.out.printf("(avg: %.2f)%n", avgSum);
                });
    }
}