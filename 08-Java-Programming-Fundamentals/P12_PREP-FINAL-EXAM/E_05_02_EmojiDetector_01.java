package P12_PREP_FINAL_EXAM;
// 100/100
// REGEX

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class E_05_02_EmojiDetector_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String text = scanner.nextLine();

        String regexDigits = "(?<digit>\\d+)";
        Pattern patternDigits = Pattern.compile(regexDigits);
        Matcher matcherDigits = patternDigits.matcher(text);

        int coolThreshold = 1;

        boolean foundDigit = matcherDigits.find();
        while (foundDigit) {
            String getDigitsAsString = matcherDigits.group("digit");

            for (int j = 0; j < getDigitsAsString.length(); j++) {
                int symbolAsInteger = Integer.parseInt(getDigitsAsString.charAt(j) + "");
                coolThreshold *= symbolAsInteger;
            }

            foundDigit = matcherDigits.find();
        }

        String regex = "(?<delimiter>::|\\*\\*)(?<emoji>[A-Z][a-z]{2,})\\1";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(text);

        Map<String, Integer> emojisAll = new LinkedHashMap<>();
        Map<String, Integer> emojisCoolOnes = new LinkedHashMap<>();

        boolean foundSomething = matcher.find();
        while (foundSomething) {
            String getEmoji = matcher.group("emoji");
            String getMatchEmoji = matcher.group(0);

            int coolness = 0;
            for (int i = 0; i < getEmoji.length(); i++) {
                char symbol = getEmoji.charAt(i);
                int symbolAsAsciiInt = (int) symbol;
                coolness += symbolAsAsciiInt;
            }

            emojisAll.put(getMatchEmoji, coolness);
            if (coolness > coolThreshold) {
                emojisCoolOnes.put(getMatchEmoji, coolness);
            }

            foundSomething = matcher.find();
        }

        int countEmojis = emojisAll.size();
        System.out.printf("Cool threshold: %d\n", coolThreshold);
        System.out.printf("%d emojis found in the text. The cool ones are:\n", countEmojis);
        for (Map.Entry<String, Integer> entry : emojisCoolOnes.entrySet()) {
            System.out.printf("%s\n", entry.getKey());
        }
    }
}