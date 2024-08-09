package P07_Generics.LAB_04_ListUtilities;

import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<Integer> numbers = Arrays.asList();
        // List<Integer> numbers = Arrays.asList(3,6,1,0,5);

        System.out.println(ListUtils.getMax(numbers));
        System.out.println(ListUtils.getMin(numbers));
    }
}
