package P01_WorkingWithAbstraction.EXE_03_CardsWithPower;
// package EXE_03_CardsWithPower;


public enum CardSuits {

    CLUBS(0),      // пика
    DIAMONDS(13),  // каро
    HEARTS(26),    // купа
    SPADES(39);    // спатия


    private int value;


    // КОНСТРУКТОР
    CardSuits(int value) {
        this.value = value;
    }


    public int getValue() {
        return this.value;
    }
}