package by.bsuir.app.entity;

import java.util.Optional;

public interface Analyzable<T extends Identifiable> {
    Optional<T> analize();
}
