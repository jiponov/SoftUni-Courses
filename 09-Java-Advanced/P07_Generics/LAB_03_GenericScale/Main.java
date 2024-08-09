package P07_Generics.LAB_03_GenericScale;

public class Main {
    public static void main(String[] args) {
        Scale<Integer> scale = new Scale<>(5, 9);
        System.out.println(scale.getHeavier());
    }
}
