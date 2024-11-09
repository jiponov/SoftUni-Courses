package P08_ExceptionsAndErrorHandling.Demo_02;

public class SoftuniUserException extends Exception {
    public SoftuniUserException(String message) {
        super(message);
    }
}