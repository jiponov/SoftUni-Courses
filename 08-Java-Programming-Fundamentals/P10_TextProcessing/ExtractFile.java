package P10_TextProcessing;

import java.util.Scanner;

public class ExtractFile {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String line = scanner.nextLine();

        String[] strArray = line.split("\\\\");       // ESCAPING BACKSLASH \ with 4x \\\\
        String subtract = strArray[strArray.length - 1];

        String fileName = subtract.split("\\.")[0];   // ESCAPING DOT . with \\.
        String extension = subtract.split("\\.")[1];

        System.out.printf("File name: %s\n" +
                "File extension: %s\n", fileName, extension);
    }
}
//100/100

/*OR:

System.out.println("File name: " + fileName);
System.out.println("File extension: " + extension);

*/