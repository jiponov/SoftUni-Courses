package P04_StreamsFilesDirectories;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class LAB_04_ExtractIntegers_02 {
    public static void main(String[] args) throws FileNotFoundException {

        String pathRead = "C:\\Users\\I353529\\Documents\\SoftUni\\Projects\\Java-Adv-May-2023\\src\\04. Java-Advanced-Files-and-Streams-Lab-Resources\\input.txt";
        FileInputStream inputStream = new FileInputStream(pathRead);

        Scanner scanner = new Scanner(inputStream);

        // hasNext -> true: не сме стигнали до края на файла
        // hasNext -> false: сме стигнали до края на файла

        while (scanner.hasNext()) {

            if (scanner.hasNextInt()) {
                int number = scanner.nextInt();
                System.out.println(number);
            }

            scanner.next();
        }
    }
}
