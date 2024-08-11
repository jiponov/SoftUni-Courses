package P07_Generics.EXE_09_CustomListIterator;

public class Sorter {

    public static void sort(CustomList customList) {
        int size = customList.getElements().size();

        for (int index = 0; index < size; index++) {
            String element = (String) customList.getElements().get(index);
            for (int nextIndex = index + 1; nextIndex < size; nextIndex++) {
                String nextElement = (String) customList.getElements().get(nextIndex);
                if (element.compareTo(nextElement) > 0) {
                    customList.swap(index, nextIndex);
                }
            }
        }
    }

}
