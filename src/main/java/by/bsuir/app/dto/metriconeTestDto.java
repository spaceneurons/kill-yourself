package by.bsuir.app.dto;

import lombok.Data;

import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;

@Data
public class BiochemicalBloodTestDto {

    private final static String MIN = "1";
    private final static String MAX = "20000.0";

    @DecimalMin(value = MIN, message = "{dto.test.value.min}")
    @DecimalMax(value = MAX, message = "{dto.test.value.max}")
    private double protein;

    @DecimalMin(value = MIN, message = "{dto.test.value.min}")
    @DecimalMax(value = MAX, message = "{dto.test.value.max}")
    private double glucose;

    @DecimalMin(value = MIN, message = "{dto.test.value.min}")
    @DecimalMax(value = MAX, message = "{dto.test.value.max}")
    private double cholesterol;

    private String username;
}
