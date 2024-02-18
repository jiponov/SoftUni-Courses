package P07_MY_MID_EXAM;
// 100/100 jiponov

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class E_20240218_03_SchoolLibrary {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> booksShelf = Arrays
                .stream(scanner.nextLine().split("&"))
                .collect(Collectors.toList());

        while (scanner.hasNextLine()) {
            String input = scanner.nextLine();
            if (input.equals("Done")) {
                break;
            }

            List<String> tokens = Arrays
                    .stream(input.split(" \\| "))
                    .collect(Collectors.toList());

            String command = tokens.get(0);

            if (command.equals("Add Book")) {
                String book = tokens.get(1);
                if (!booksShelf.contains(book)) {
                    booksShelf.add(0, book);
                }

            } else if (command.equals("Take Book")) {
                String book = tokens.get(1);
                if (booksShelf.contains(book)) {
                    booksShelf.remove(String.valueOf(book));
                }

            } else if (command.equals("Swap Books")) {
                String book1 = tokens.get(1);
                String book2 = tokens.get(2);
                if (booksShelf.contains(book1) && booksShelf.contains(book2)) {
                    int indexBook1 = booksShelf.indexOf(book1);
                    int indexBook2 = booksShelf.indexOf(book2);
                    int indexTemp = indexBook1;
                    indexBook1 = indexBook2;
                    indexBook2 = indexTemp;
                    booksShelf.set(indexBook1, book1);
                    booksShelf.set(indexBook2, book2);
                }

            } else if (command.equals("Insert Book")) {
                String book = tokens.get(1);
                if (!booksShelf.contains(book)) {
                    booksShelf.add(book);
                }

            } else if (command.equals("Check Book")) {
                int indexBook = Integer.parseInt(tokens.get(1));
                if (indexBook >= 0 && indexBook <= booksShelf.size() - 1) {
                    String book = booksShelf.get(indexBook);
                    System.out.println(book);
                }
            }
        }


        System.out.println(String.join(", ", booksShelf));
    }
}