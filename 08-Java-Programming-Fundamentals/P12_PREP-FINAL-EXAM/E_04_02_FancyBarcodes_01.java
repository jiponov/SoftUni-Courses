package P12_PREP_FINAL_EXAM;
// 100/100
// REGEX

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class E_04_02_FancyBarcodes_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < n; i++) {
            String text = scanner.nextLine();
            String regex = "@#+(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+";
            Pattern pattern = Pattern.compile(regex);
            Matcher matcher = pattern.matcher(text);
            boolean foundSomething = matcher.find();

            if (!foundSomething) {
                System.out.println("Invalid barcode");
                continue;
            }

            String getGroup = matcher.group("barcode");
            String res = "";

            for (int j = 0; j < getGroup.length(); j++) {
                char symbol = getGroup.charAt(j);
                if (Character.isDigit(symbol)) {
                    res += symbol;
                }
            }

            if (res.isEmpty()) {
                res = "00";
            }

            System.out.printf("Product group: %s\n", res);
        }
    }
}

/*
Examples of valid barcodes: @###Che46sE@##, @#FreshFisH@#, @###Brea0D@###, @##Che46sE@##
Examples of invalid barcodes: ##InvaliDiteM##, @InvalidIteM@, @#Invalid_IteM@#
*/