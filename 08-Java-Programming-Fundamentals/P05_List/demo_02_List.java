package P05_List;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class demo_02_List {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<Integer>(Arrays.asList(10, 20, 30, 40, 50, 60, 70));

        int singleNum = numbers.get(1);
        System.out.println(singleNum);

        System.out.println(numbers);

        singleNum = 444;

        System.out.println(singleNum);
        System.out.println(numbers);
        System.out.println("----------------------------------------");

        List<Integer> newArrayList = new ArrayList<>(numbers.subList(1, 2));
        System.out.println(newArrayList);
        System.out.println(numbers);

        System.out.println("----------------------------------------");
        newArrayList.set(0, 777);
        System.out.println(newArrayList);
        System.out.println(numbers);

    }
}
