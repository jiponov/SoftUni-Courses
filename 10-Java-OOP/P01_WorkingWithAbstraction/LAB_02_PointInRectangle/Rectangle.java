package P01_WorkingWithAbstraction.LAB_02_PointInRectangle;

public class Rectangle {

    private Point bottomLeft;
    private Point topRight;

    public Rectangle(Point bottomLeft, Point topRight) {    // КОНСТРУКТОР

        // нов правоъгълник
        this.bottomLeft = bottomLeft;
        this.topRight = topRight;
    }

    public Point getBottomLeft() {
        return bottomLeft;
    }

    public void setBottomLeft(Point bottomLeft) {
        this.bottomLeft = bottomLeft;
    }

    public Point getTopRight() {
        return topRight;
    }

    public void setTopRight(Point topRight) {
        this.topRight = topRight;
    }


    // true -ако дадената точка е в правоъгълника
    // false -ако дад.т. не е в правоъгълника
    public boolean contains(Point point) {
        // 1. да е вътре по x
        boolean isInsideX = point.getX() >= bottomLeft.getX() && point.getX() <= topRight.getX();
        // 2. да е вътре по y
        boolean isInsideY = point.getY() >= bottomLeft.getY() && point.getY() <= topRight.getY();

        return isInsideX && isInsideY;
    }
}