package P09_AssociativeArrays;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class WordFilter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> line = Arrays
                .stream(scanner.nextLine().split(" "))
                .map(el -> el)
                .filter(el -> el.length() % 2 == 0)
                .collect(Collectors.toList());

        line.forEach(x -> System.out.println(x));
    }
}
// 100/100