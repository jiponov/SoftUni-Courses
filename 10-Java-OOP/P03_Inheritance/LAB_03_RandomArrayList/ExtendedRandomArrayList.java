package P03_Inheritance.LAB_03_RandomArrayList;
//package LAB_03_RandomArrayList;

public class ExtendedRandomArrayList<T> extends RandomArrayList<T> {

    public void method() {
        super.modCount = 5;

//        super.removeRange();
    }
}
