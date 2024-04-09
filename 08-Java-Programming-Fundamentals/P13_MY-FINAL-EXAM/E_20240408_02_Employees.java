package P14_MY_FINAL_RETAKE_EXAM;
// 100/100
// REGEX

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class E_20240408_02_Employees {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < n; i++) {
            String textStr = scanner.nextLine();
            String regex = "";
            if (textStr.contains("&")) {
                regex = "(?<name>[A-Z][a-z]{2,} [A-Z][a-z]{2,})#+(?<job>(?:[A-Z][a-zA-Z]+(?:&[A-Z][a-zA-Z]+){0,2}))(?<delimiter>[0-9]{2})(?<company>[A-Z][A-Za-z]+(?: [A-Z][A-Za-z]+)* (?:JSC|Ltd\\.))";
            } else if (!textStr.contains("&")) {
                regex = "(?<name>[A-Z][a-z]{2,} [A-Z][a-z]{2,})#+(?<job>[A-Z][a-zA-Z]+)(?<delimiter>[0-9]{2})(?<company>[A-Z][A-Za-z0-9]+)(?<abr> (?:JSC|Ltd\\.))";
            }

            Pattern pattern = Pattern.compile(regex);
            Matcher matcher = pattern.matcher(textStr);

            boolean foundSomething = matcher.find();

            if (foundSomething && textStr.contains("&")) {
                String name = matcher.group("name");
                String job = matcher.group("job");
                job = job.replace("&", " ");
                String getCompany = matcher.group("company");
                System.out.printf("%s is %s at %s\n", name, job, getCompany);
            } else if (foundSomething && !textStr.contains("&")) {
                String name = matcher.group("name");
                String job = matcher.group("job");
                String company = matcher.group("company");
                String abr = matcher.group("abr");
                String getCompany = company + abr;
                System.out.printf("%s is %s at %s\n", name, job, getCompany);
            }
        }
    }
}