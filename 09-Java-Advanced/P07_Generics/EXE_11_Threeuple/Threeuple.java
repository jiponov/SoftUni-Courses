package P07_Generics.EXE_11_Threeuple;

public class Threeuple<F, S, T> {
    private F item1;
    private S item2;
    private T item3;

    public Threeuple(F item1, S item2, T item3) {
        this.setItem1(item1);
        this.setItem2(item2);
        this.setItem3(item3);
    }

    private void setItem3(T item3) {
        this.item3 = item3;
    }

    public void setItem1(F item1) {
        this.item1 = item1;
    }

    public void setItem2(S item2) {
        this.item2 = item2;
    }

    public F getItem1() {
        return item1;
    }

    public S getItem2() {
        return item2;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        return sb.append(this.item1).append(" -> ").append(this.item2).append(" -> ").append(this.item3).toString();
    }

}
