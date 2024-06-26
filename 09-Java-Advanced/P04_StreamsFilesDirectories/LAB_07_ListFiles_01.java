package P04_StreamsFilesDirectories;

import java.io.File;

public class LAB_07_ListFiles_01 {
    public static void main(String[] args) {

        File folder = new File("C:\\Users\\I353529\\Documents\\SoftUni\\Projects\\Java-Adv-May-2023\\src\\04. Java-Advanced-Files-and-Streams-Lab-Resources\\Files-and-Streams");

        if (folder.exists()) {
            // съществува такъв файл
            if (folder.isDirectory()) {
                // файлът е папка
                File[] allFiles = folder.listFiles();
                for (File file : allFiles) {
                    if (!file.isDirectory()) {
                        System.out.printf("%s: [%d]%n", file.getName(), file.length());
                    }
                }
            }
        }

    }
}
