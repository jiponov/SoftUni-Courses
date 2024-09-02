package P08_IteratorsAndComparators.EXE_03_StackIterator;

import java.util.Iterator;
import java.util.Spliterator;
import java.util.function.Consumer;

public class Stack<Integer> implements Iterable<Integer> {
    private Node<Integer> top;

    public Stack() {
        this.top = null;
    }

    // push
    public void push(int newElement) {
        Node<Integer> newNode = new Node<Integer>(newElement);
        newNode.prev = this.top;
        this.top = newNode;
    }

    // pop
    public int pop() throws Exception {
        if (this.top == null) {
            throw new Exception("No elements");
        } else {
            Node<Integer> currentTop = this.top;
            this.top = this.top.prev;
            return currentTop.element;
        }
    }

    @Override
    public Iterator<Integer> iterator() {
        return new Iterator<Integer>() {
            private Node<Integer> current = top;

            @Override
            public boolean hasNext() {
                return current != null;
            }

            @Override
            public Integer next() {
                int currentValue = current.element;
                this.current = this.current.prev;
                return (Integer) java.lang.Integer.valueOf(currentValue);
            }
        };
    }

    @Override
    public void forEach(Consumer<? super Integer> action) {

    }

    @Override
    public Spliterator<Integer> spliterator() {
        return null;
    }

}
