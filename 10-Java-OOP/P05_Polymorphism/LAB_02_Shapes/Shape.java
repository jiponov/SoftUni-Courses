package P05_Polymorphism.LAB_02_Shapes;

public abstract class Shape {
    private Double perimeter;
    private Double area;

    public double getArea() {
        if (area == null) {
            area = calculateArea();
        }

        return area;
    }

    public double getPerimeter() {
        if (perimeter == null) {
            perimeter = calculatePerimeter();
        }

        return perimeter;
    }

    protected abstract double calculateArea();

    protected abstract double calculatePerimeter();

}