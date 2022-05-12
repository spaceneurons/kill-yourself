package by.bsuir.app.exception;

public class UserStatusException extends RuntimeException{
    public UserStatusException() {
    }

    public UserStatusException(String message) {
        super(message);
    }
}
