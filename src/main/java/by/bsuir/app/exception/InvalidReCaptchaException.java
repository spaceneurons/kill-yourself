package by.bsuir.app.exception;

public class InvalidReCaptchaException extends RuntimeException {

    public InvalidReCaptchaException(String message) {
        super(message);
    }

    public InvalidReCaptchaException(String message, Throwable cause) {
        super(message, cause);
    }

}
