package P12_PREP_FINAL_EXAM;
// 100/100
// REGEX

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class E_20240331_02_EasterEggs {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String textStr = scanner.nextLine();
        String regex = "[@#]+(?<color>[a-z]{3,})[@#]+(?<any>[^A-Za-z0-9]*)(?<slash>/+)(?<amount>\\d+)\\3";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(textStr);

        boolean foundSomething = matcher.find();
        while (foundSomething) {
            String colorEgg = matcher.group("color");
            int amountEgg = Integer.parseInt(matcher.group("amount"));

            System.out.printf("You found %d %s eggs!\n", amountEgg, colorEgg);

            foundSomething = matcher.find();
        }
    }
}