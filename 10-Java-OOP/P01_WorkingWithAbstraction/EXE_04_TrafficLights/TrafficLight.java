package P01_WorkingWithAbstraction.EXE_04_TrafficLights;
// package EXE_04_TrafficLights;

import java.util.*;


public class TrafficLight {

    private Color color;


    public TrafficLight(Color color) {
        // нов светофар
        this.color = color;
    }


    // променя цвета си
    public void changeColor() {

        // if (Objects.requireNonNull(this.color) == Color.RED) {
        if (this.color == Color.RED) {
            this.color = Color.GREEN;
        } else if (this.color == Color.GREEN) {
            this.color = Color.YELLOW;
        } else if (this.color == Color.YELLOW) {
            this.color = Color.RED;
        }
    }


    // взима ЦВЕТА името му като String и го ВРЪЩА
    public String getColor() {
        return this.color.name();
    }
}



/*

        // променя цвета си
    public void changeColor() {

        switch (this.color) {
            case RED:
                this.color = Color.GREEN;
                break;
            case GREEN:
                this.color = Color.YELLOW;
                break;
            case YELLOW:
                this.color = Color.RED;
                break;
        }
    }

*/