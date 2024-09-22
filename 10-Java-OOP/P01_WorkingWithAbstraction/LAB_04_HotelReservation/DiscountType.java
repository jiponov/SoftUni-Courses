package P01_WorkingWithAbstraction.LAB_04_HotelReservation;

public enum DiscountType {

    // enum ОТСТЪПКИ
    NONE("None", 0),
    SECONDVISIT("SecondVisit", 10),
    VIP("VIP", 20);


    private String name;
    private double percent;

    DiscountType(String name, double percent) {
        this.name = name;
        this.percent = percent;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPercent() {
        return percent;
    }

    public void setPercent(double percent) {
        this.percent = percent;
    }

}
