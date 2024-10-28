package P05_Polymorphism.EXE_03_Word;

public class Initialization {

    public static CommandInterface buildCommandInterface(StringBuilder text) {
        return new CommandImpl(text);
    }
}