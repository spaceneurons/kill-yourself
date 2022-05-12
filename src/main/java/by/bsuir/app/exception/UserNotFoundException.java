package by.bsuir.app.exception;

public class UserNotFoundException extends Exception {
    public UserNotFoundException(String message) {

    }

    public UserNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public UserNotFoundException(Throwable cause) {
        super(cause);
    }
}
