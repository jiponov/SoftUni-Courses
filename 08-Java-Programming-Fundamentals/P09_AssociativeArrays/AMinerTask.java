package P09_AssociativeArrays;

import java.util.*;
import java.util.LinkedHashMap;
import java.util.Scanner;

public class AMinerTask {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, Integer> map = new LinkedHashMap<>();

        while (scanner.hasNextLine()) {
            String input = scanner.nextLine();
            if (input.equals("stop")) {
                break;
            }

            String resource = input;
            int newQuantity = Integer.parseInt(scanner.nextLine());

            if (!map.containsKey(resource)) {
                map.put(resource, 0);
            }

            int currentQuantity = map.get(resource);
            map.put(resource, currentQuantity + newQuantity);
        }

        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}
//100/100