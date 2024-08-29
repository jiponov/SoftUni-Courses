package P08_IteratorsAndComparators.EXE_02_Collection;

import java.util.Iterator;
import java.util.List;
import java.util.Spliterator;
import java.util.function.Consumer;

public class ListyIterator implements Iterable<String> {
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

    public void printAll() {
        for (String s : this.data) {
            System.out.print(s + " ");
        }
        System.out.println();
    }


    @Override
    public Iterator<String> iterator() {
        return new Iterator<String>() {
            private int index;

            @Override
            public boolean hasNext() {
                return this.index < data.size() - 1;
            }

            @Override
            public String next() {
                return data.get(this.index++);
            }
        };
    }

    @Override
    public void forEach(Consumer<? super String> action) {

    }

    @Override
    public Spliterator<String> spliterator() {
        return null;
    }

}
