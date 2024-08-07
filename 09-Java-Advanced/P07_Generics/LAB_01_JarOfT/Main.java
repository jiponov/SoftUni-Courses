package P07_Generics.LAB_01_JarOfT;

public class Main {
    public static void main(String[] args) {

        Jar<String> stringJar = new Jar<>();

        stringJar.add("Desi");
        stringJar.add("Ivan");
        String removed = stringJar.remove();
        System.out.println(removed);


        Jar<Integer> integerJar = new Jar<>();

        integerJar.add(5);
        integerJar.add(8);
        int removedNum = integerJar.remove();
        System.out.println(removedNum);


        // RESULT CONSOLE:
        // Ivan
        // 8
    }
}