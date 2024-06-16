package P04_StreamsFilesDirectories;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintWriter;
import java.util.Scanner;

public class LAB_04_ExtractIntegers_01 {
    public static void main(String[] args) throws FileNotFoundException {
        String pathRead = "C:\\Users\\I353529\\Documents\\SoftUni\\Projects\\Java-Adv-May-2023\\src\\04. Java-Advanced-Files-and-Streams-Lab-Resources\\input.txt";
        FileInputStream inputStream = new FileInputStream(pathRead);

        Scanner scanner = new Scanner(inputStream);

        String pathWrite = "C:\\Users\\I353529\\Documents\\SoftUni\\Projects\\Java-Adv-May-2023\\src\\04. Java-Advanced-Files-and-Streams-Lab-Resources\\outputNumbers.txt";
        FileOutputStream outputStream = new FileOutputStream(pathWrite);

        PrintWriter writer = new PrintWriter(outputStream);

        // hasNext -> true: не сме стигнали до края на файла
        // hasNext -> false: сме стигнали до края на файла

        while (scanner.hasNext()) {

            if (scanner.hasNextInt()) {
                int number = scanner.nextInt();
                writer.println(number);
            }

            scanner.next();
        }

        writer.close();
    }
}
