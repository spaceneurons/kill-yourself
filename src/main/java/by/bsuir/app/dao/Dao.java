package by.bsuir.app.dao;

import by.bsuir.app.exception.DaoException;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

public interface Dao<T extends Serializable> {
    List<T> findByCriteriaList(String param, String fieldName) throws DaoException;

    Optional<T> findByCriteriaSingleResult(String param, String fieldName) throws DaoException;

    Optional<T> findById(Long id) throws DaoException;

    List<T> findAll();

    Long save(T entity);

    void update(T entity);

    void delete(T entity);

    void deleteById(Long entityId);
}
