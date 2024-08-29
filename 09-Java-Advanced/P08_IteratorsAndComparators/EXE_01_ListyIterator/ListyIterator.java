package P08_IteratorsAndComparators.EXE_01_ListyIterator;

import java.util.List;

public class ListyIterator {
    private List<String> data;
    private int index;

    public ListyIterator(List<String> data) {
        this.data = data;

        if (!this.data.isEmpty()) {
            this.index = 0;
        } else {
            this.index = -1;
        }
    }

    public boolean move() {
        if (this.index < this.data.size() - 1) {
            this.index++;
            return true;
        }
        return false;
    }

    public boolean hasNext() {
        return this.index < this.data.size() - 1;
    }

    public void print() throws Exception {
        if (!this.data.isEmpty()) {
            System.out.println(this.data.get(this.index));
        } else {
            throw new Exception("Invalid Operation!");
        }
    }

}
