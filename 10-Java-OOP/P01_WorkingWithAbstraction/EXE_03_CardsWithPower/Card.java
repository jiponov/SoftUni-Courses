package P01_WorkingWithAbstraction.EXE_03_CardsWithPower;
// package EXE_03_CardsWithPower;


public class Card {

    private CardSuits cardSuit;    //  боя (пика, купа, каро, спатия)
    private CardRanks cardRank;    //  тип (асо, 2, 3, 4, 5, 6, 7, 8, 9, 10, вале, дама, поп)


    public Card(CardSuits cardSuit, CardRanks cardRank) {
        // нова празна карта
        // cardSuit = null
        // cardRank = null

        this.cardSuit = cardSuit;
        this.cardRank = cardRank;
    }


    // сила  =  стойността на боята + стойността на типа карта
    public int calculatePower() {
        return this.cardSuit.getValue() + this.cardRank.getValue();
    }
}