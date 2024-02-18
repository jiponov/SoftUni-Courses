package P03_Arrays;

import java.util.Arrays;

public class demoP02 {
    public static void main(String[] args) {

        String name = "Example";

        char[] letters = name.toCharArray();

        System.out.println(Arrays.toString(letters));
        // [E, x, a, m, p, l, e]


        String [] names = new String[10];
        // we have default values:
        // [null, null, null, null, null, null, null, null, null, null]

    }
}
