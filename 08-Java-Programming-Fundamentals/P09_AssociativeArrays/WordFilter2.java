package P09_AssociativeArrays;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class WordFilter2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] words = Arrays
                .stream(scanner.nextLine().split(" ")) //["kiwi", "orange", "banana", "apple"]
                .filter(word -> word.length() % 2 == 0)      //["kiwi", "orange", "banana"]
                .toArray(String[]::new);

        Arrays.stream(words).forEach(word -> System.out.println(word));
        /*
        2-ри начин:
         for (String word : words) {
            System.out.println(word);
        }
        */
    }
}
// 100/100