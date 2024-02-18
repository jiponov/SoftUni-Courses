package P05_List;

import java.util.ArrayList;
import java.util.List;

public class demo_01_List {
    public static void main(String[] args) {
        List<String> wordsList = new ArrayList<String>();

        wordsList.add("one");
        wordsList.add("two");
        wordsList.add("three");
        wordsList.add("four");

        wordsList.set(3, "ten");
        System.out.println(wordsList);
        List<String> newList = new ArrayList<String>();
        newList = wordsList.subList(1, 2);
        System.out.println(newList);
        System.out.println(wordsList);
        newList.set(0, "hundred");
        System.out.println(newList);
        System.out.println(wordsList);

    }
}
