package P05_Polymorphism.LAB_04_WildFarm.food;

public abstract class Food {
    private int quantity;

    protected Food(int quantity) {
        this.quantity = quantity;
    }

    public int getQuantity() {
        return quantity;
    }

}