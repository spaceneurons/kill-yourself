package by.bsuir.app.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(exclude = {"user"}, callSuper = true)
@Entity
public class metriconeTest extends Analyzes<metriconeTest> {

    private static final long serialVersionUID = 1L;

    @NotNull
    private double protein;
    @Transient
    private String proteinState;

    @NotNull
    private double glucose;
    @Transient
    private String glucoseState;

    @NotNull
    private double cholesterol;
    @Transient
    private String cholesterolState;

    @Transient
    private String customerAcquisitionCost;
    @Transient
    private String customerAcquisitionCostState;
}
