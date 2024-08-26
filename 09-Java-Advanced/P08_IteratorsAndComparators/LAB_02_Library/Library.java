package P08_IteratorsAndComparators.LAB_02_Library;

import java.util.Iterator;

public class Library implements Iterable<Book> {

    private Book[] books;

    // нова библиотека
    public Library(Book... books) {
        this.books = books;
    }


    @Override
    public Iterator<Book> iterator() {
        return new LibraryIterator();
    }


    // ITERATOR
    private class LibraryIterator implements Iterator<Book> {

        // на коя книга се намирам
        private int count = 0;


        @Override
        public boolean hasNext() {
            return count < books.length;
        }


        @Override
        public Book next() {
            return books[count++];
        }
    }

}
