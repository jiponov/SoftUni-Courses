package P09_AssociativeArrays;

import java.util.*;
import java.util.stream.Collectors;
import java.util.Scanner;

public class CountRealNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Double> nums = Arrays     // real numbers (double)
                .stream(scanner.nextLine().split(" "))
                .map(Double::parseDouble)
                .collect(Collectors.toList());

        // запис (entry), двойка (pair):  ЧИСЛО -> БР.СРЕЩАНИЯ (в ascending order by KEY)
        Map<Double, Integer> map = new TreeMap<>();

        for (double num : nums) {
            if (!map.containsKey(num)) {     // не сме го срещали до момента този запис (ENTRY)
                map.put(num, 0);     // първото срещане на числото
            }

            int occurrences = map.get(num);     // текущия брой на срещанията;  (това е VALUE-to на взетия KEY)
            occurrences++;
            map.put(num, occurrences);
        }

        // запис (entry):  key(число) -> value(бр. срещания)
        for (Map.Entry<Double, Integer> pair : map.entrySet()) {
            System.out.printf("%.0f -> %d\n", pair.getKey(), pair.getValue());
        }
    }
}
//100/100

/*
2-ри начин:

DecimalFormat df = new DecimalFormat("#.#######");

for (Map.Entry<Double, Integer> entry : numbers.entrySet()) {
System.out.printf("%s -> %d%n", df.format(entry.getKey()), entry.getValue());
}

*/