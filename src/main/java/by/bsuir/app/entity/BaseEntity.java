package by.bsuir.app.entity;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Data
@MappedSuperclass
@ToString
public abstract class BaseEntity implements Serializable, Identifiable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    @Column(columnDefinition = "bit default b'0'")
    protected boolean is_deleted;
}