package by.bsuir.app.dto;

import by.bsuir.app.validation.PasswordMatches;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Data;
import lombok.NonNull;

import javax.validation.constraints.*;

@Data
@PasswordMatches
public class UserRegistrationDto {

    private final static int MIN_STRING_LENGTH = 3;
    private final static int MAX_STRING_LENGTH = 28;

    @Size(min = MIN_STRING_LENGTH, max = MAX_STRING_LENGTH, message = "{dto.field.empty}")
    private String username;

    @Size(min = MIN_STRING_LENGTH, max = MAX_STRING_LENGTH, message = "{dto.field.empty}")
    private String password;
    private String matchingPassword;

    @Size
    @NotBlank(message = "{dto.empty}")
    @Email(regexp = "[\\S._%+-]+@[\\S.-]+\\.[\\S]{2,}", message = "{dto.card.email.pattern}")
    private String email;

    @AssertTrue(message = "{dto.registration.check}")
    boolean confirmation;

    @NotBlank(message = "{dto.captcha.invalid}")
    @JsonProperty("g-recaptcha-response")
    private String gRecaptchaResponse;
}
