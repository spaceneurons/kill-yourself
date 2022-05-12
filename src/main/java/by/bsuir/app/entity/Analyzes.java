package by.bsuir.app.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Data
@MappedSuperclass
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(exclude = {"user"}, callSuper = true)
@ToString(exclude = "user")
@JsonIgnoreProperties(value = { "user" })
public abstract class Analyzes<T extends Identifiable> extends BaseEntity{

    private static final long serialVersionUID = 1L;

    @OneToOne
    protected User attendingDoctor;

    @ManyToOne(cascade = CascadeType.ALL,
            fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    protected User user;

    @JsonFormat(pattern="dd-MM-yyyy HH:mm:ss")
    protected Date createdOn;
    protected String result;
}
