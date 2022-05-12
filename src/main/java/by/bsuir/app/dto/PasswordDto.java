package by.bsuir.app.dto;

import by.bsuir.app.validation.PasswordMatches;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@PasswordMatches
public class PasswordDto {

    private Long id;

    @NotBlank(message = "{dto.empty}")
    private String password;
}
