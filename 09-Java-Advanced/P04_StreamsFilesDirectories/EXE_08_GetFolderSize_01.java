package P04_StreamsFilesDirectories;

import java.io.File;
import java.util.Scanner;

public class EXE_08_GetFolderSize_01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String pathFolder = "C:\\Users\\I353529\\Documents\\SoftUni\\Projects\\JavaAdvanced_Jan_2023\\src\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\Exercises Resources";
        File folder = new File(pathFolder);

        File[] allFilesInFolder = folder.listFiles();   // масив с всички файлове в папката

        int folderSize = 0;   // размер на папката
        if (allFilesInFolder != null) {
            for (File file : allFilesInFolder) {
                folderSize += file.length();
            }
        }


        System.out.println("Folder size: " + folderSize);
    }
}
