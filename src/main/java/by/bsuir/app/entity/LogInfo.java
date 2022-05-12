package by.bsuir.app.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(exclude = {"user"}, callSuper = true)
@ToString
@Entity
public class LogInfo extends BaseEntity {

   private static final long serialVersionUID = 1L;

   @NonNull
   private Date timestamp;

   @ManyToOne
   private User user;
}
