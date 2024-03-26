package P12_PREP_FINAL_EXAM;
// REGEX

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class E_01_02_AdAstra_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String text = scanner.nextLine();
        List<String> result = new ArrayList<>();

        String regex = "(?<delimiter>[|#])(?<name>[A-Za-z ]+)\\1(?<expiration>\\d{2}\\/\\d{2}\\/\\d{2})\\1(?<calories>\\d+)\\1";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(text);

        int totalCalories = 0;
        boolean foundSomething = matcher.find();
        while (foundSomething) {
            int getCalories = Integer.parseInt(matcher.group("calories"));
            if (getCalories >= 0 && getCalories <= 10000) {
                totalCalories += getCalories;
            }

            String getName = matcher.group("name");
            String getExpiration = matcher.group("expiration");
            String row = "Item: " + getName + ", " + "Best before: " + getExpiration + ", " + "Nutrition: " + getCalories;
            result.add(row);

            foundSomething = matcher.find();
        }

        int days = (int) Math.floor(totalCalories / 2000);
        System.out.printf("You have food to last you for: %d days!\n", days);

        for (String row : result) {
            System.out.println(row);
        }
    }
}
// 100/100

/*
 //System.out.printf("Item: %s, Best before: %s, Nutrition: %s");

INPUT
#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|

OUTPUT
You have food to last you for: 2 days!
Item: Bread, Best before: 19/03/21, Nutrition: 4000
Item: Apples, Best before: 08/10/20, Nutrition: 200
Item: Carrots, Best before: 06/08/20, Nutrition: 500

*/