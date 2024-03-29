package P12_PREP_FINAL_EXAM;
// 100/100
// REGEX

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class E_06_02_DestinationMapper_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String places = scanner.nextLine();

        String regex = "(?<delimiter>[=\\\\/])(?<name>[A-Z][A-Za-z]{2,})\\1";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(places);

        List<String> locations = new ArrayList<>();
        int sum = 0;
        boolean foundSomething = matcher.find();
        while (foundSomething) {
            String getName = matcher.group("name");
            locations.add(getName);
            int nameLength = getName.length();
            sum += nameLength;

            foundSomething = matcher.find();
        }

        System.out.printf("Destinations: %s\n", String.join(", ", locations));
        System.out.printf("Travel Points: %d\n", sum);
    }
}