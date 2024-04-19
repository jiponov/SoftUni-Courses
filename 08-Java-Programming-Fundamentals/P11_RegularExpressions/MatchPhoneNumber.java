package P11_RegularExpressions;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MatchPhoneNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String text = scanner.nextLine();
        List<String> result = new ArrayList<>();

        String regex = "(\\+359)([ |-])(2)\\2(\\d{3})\\2(\\d{4})\\b";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(text);

        boolean foundSomething = matcher.find();     // true/false
        while (foundSomething) {
            String getMatch = matcher.group(0);
            result.add(getMatch);

            foundSomething = matcher.find();
        }

        System.out.println(String.join(", ", result));
    }
}
// 100/100

/*
INPUT
+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222
OUTPUT
+359 2 222 2222, +359-2-222-2222
*/