package P03_Inheritance.LAB_03_RandomArrayList;
//package LAB_03_RandomArrayList;

import java.util.ArrayList;
import java.util.Random;

public class RandomArrayList<T> extends ArrayList<T> {

    private final Random random;
    //    private int modCount;

    public RandomArrayList() {
        super();   // вика ArrayList constructor-a стандартния

        //        super.modCount;

        this.random = new Random();    // създава нов random ВЕДНЪЖ само
    }


    public T getRandomElement() {

        int index = random.nextInt(super.size());

        // .nextInt() => [-200000, 20000]
        // int index = rand % (super.size() - 1); // can lead to negative numbers

        T result = super.get(index);

        super.remove(index);

        return result;

        //         20002 % 5 = 2
        //         x % 5 => [0; 4]
        // [0, size() - 1]
        // [x; y] => [5; 10]
    }

    //    @Override
    //    public void removeRange(int fromIndex, int toIndex) {
    //        super.removeRange(fromIndex, toIndex);
    //    }
}