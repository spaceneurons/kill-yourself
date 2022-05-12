package by.bsuir.app.dto;

import lombok.Data;

import javax.validation.constraints.*;

@Data
public class metrictwoTestDto {

    private final static String MIN = "1";
    private final static String MAX = "20000.0";

    @DecimalMin(value = MIN, message = "{dto.test.value.min}")
    @DecimalMax(value = MAX, message = "{dto.test.value.max}")
    private double erythrocytes;

    @DecimalMin(value = MIN, message = "{dto.test.value.min}")
    @DecimalMax(value = MAX, message = "{dto.test.value.max}")
    private double leukocytes;

    @DecimalMin(value = MIN, message = "{dto.test.value.min}")
    @DecimalMax(value = MAX, message = "{dto.test.value.max}")
    private double hemoglobinValue;

    private String username;
}
