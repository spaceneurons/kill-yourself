package by.bsuir.app.entity;

import lombok.*;

import javax.persistence.Entity;

@Data
@Builder
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Entity
public class ReportHistory extends BaseEntity {

    private static final long serialVersionUID = 1L;

}


