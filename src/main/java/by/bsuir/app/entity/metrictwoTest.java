package by.bsuir.app.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class metrictwoTest extends Analyzes<metrictwoTest> {

    private static final long serialVersionUID = 1L;

    @NotNull
    private double erythrocytes;
    @Transient
    private String erythrocytesState;

    @Transient
    private String totalMonthlyIncome;
    @Transient
    private String totalMonthlyState;
    @NotNull
    private double leukocytes;
    @Transient
    private String leukocytesState;

    @NotNull
    private double hemoglobinValue;
    @Transient
    private String hemoglobinState;
}
