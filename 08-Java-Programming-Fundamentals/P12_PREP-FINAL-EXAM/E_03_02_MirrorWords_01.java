package P12_PREP_FINAL_EXAM;
// 100/100
// REGEX

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class E_03_02_MirrorWords_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String text = scanner.nextLine();
        String regex = "(?<delimiter>[@#])(?<one>[A-Za-z]{3,})\\1\\1(?<two>[A-Za-z]{3,})\\1";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(text);

        Map<String, String> words = new LinkedHashMap<>();
        int countPairs = 0;
        int countMirrorWords = 0;

        boolean foundSomething = matcher.find();
        while (foundSomething) {
            String getOne = matcher.group("one");
            String getTwo = matcher.group("two");

            String reversedTwo = "";
            for (int i = getTwo.length() - 1; i >= 0; i--) {
                reversedTwo += getTwo.charAt(i);
            }

            boolean isMirrorWord = getOne.equals(reversedTwo);
            if (isMirrorWord) {
                words.put(getOne, getTwo);
                countMirrorWords++;
            }

            if (!getOne.isEmpty() && !getTwo.isEmpty()) {
                countPairs++;
            }

            foundSomething = matcher.find();
        }


        if (countPairs == 0) {
            System.out.println("No word pairs found!");
            System.out.println("No mirror words!");
            return;

        } else if (countPairs > 0) {
            System.out.printf("%d word pairs found!\n", countPairs);

            if (countMirrorWords > 0) {
                System.out.println("The mirror words are:");
                List<String> res = new ArrayList<>();
                for (Map.Entry<String, String> pair : words.entrySet()) {
                    res.add(String.format("%s <=> %s", pair.getKey(), pair.getValue()));
                }
                System.out.println(String.join(", ", res));
            } else {
                System.out.println("No mirror words!");
            }
        }
    }
}