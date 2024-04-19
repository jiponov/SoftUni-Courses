package P11_RegularExpressions;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MatchFullName {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String text = scanner.nextLine();

        String regex = "\\b[A-Z][a-z]+ [A-Z][a-z]{1,}\\b";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(text);

        boolean foundSomething = matcher.find();     // true/false
        while (foundSomething) {
            String getMatch = matcher.group(0);
            System.out.print(getMatch + " ");

            foundSomething = matcher.find();
        }
    }
}
// 100/100
/*
System.out.println(getMatch);            // Lubomir Jiponov

INPUT
Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Georgi Georgiev, Ivan	Ivanov, Lubomir Jiponov, peter georgiev, peter GeOrgiev, Peter   GeORgiev, PEter GEorgiev, Peter Georgiev, Anna Petrova
OUTPUT
Ivan Ivanov Georgi Georgiev Lubomir Jiponov Peter Georgiev Anna Petrova
*/