package P03_SetsAndMapsAdvanced;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class LAB_08_AcademyGraduation_01 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int numberOfStudents = Integer.parseInt(scanner.nextLine());
        Map<String, List<Double>> graduationList = new TreeMap<>();

        IntStream.range(0, numberOfStudents)
                .mapToObj(i -> scanner.nextLine())
                .forEach(name -> graduationList.put(name, Arrays.stream(scanner.nextLine().split("\\s+"))
                        .map(Double::parseDouble).collect(Collectors.toList())));

        graduationList.forEach((k, v) -> System.out.printf("%s is graduated with %s%n", k, getAverage(v)));
    }

    private static Double getAverage(List<Double> value) {

        double average = 0.0;

        for (Double aDouble : value) {
            average += aDouble;
        }

        return average / value.size();
    }
}