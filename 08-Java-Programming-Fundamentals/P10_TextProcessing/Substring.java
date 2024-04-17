package P10_TextProcessing;

import java.util.Scanner;

public class Substring {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String key = scanner.nextLine();
        String text = scanner.nextLine();

        while (text.indexOf(key) != -1) {
            text = text.replace(key, "");
            //System.out.println(text);
        }

        System.out.println(text);
    }
}
//100/100
/*
//            int indexStart = text.indexOf(key);
//            int indexEnd = indexStart + key.length();
//            String firstPart = text.substring(0, indexStart);
//            String secondPart = text.substring(indexEnd, text.length() - 1);
 */
