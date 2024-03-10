package P05_List;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class BombNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> elements = Arrays
                .stream(scanner.nextLine().split("\\s+"))
                .collect(Collectors.toList());

        String[] data = scanner.nextLine().split("\\s+");
        String bombNumber = data[0];
        int bombPower = Integer.parseInt(data[1]);

        while (elements.contains(bombNumber)) {
            int indexBomb = elements.indexOf(bombNumber);

            int left = Math.max(0, indexBomb - bombPower);
            int right = Math.min(indexBomb + bombPower, elements.size() - 1);

            for (int i = right; i >= left; i--) {
                elements.remove(i);
            }
        }

        System.out.println(elements.stream().mapToInt(Integer::parseInt).sum());
    }
}
//100/100