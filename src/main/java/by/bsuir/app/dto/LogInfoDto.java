package by.bsuir.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
@AllArgsConstructor
public class LogInfoDto {
    private Date date;
    private Integer visitsCount;
}
