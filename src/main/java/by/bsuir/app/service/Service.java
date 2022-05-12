package by.bsuir.app.service;

import by.bsuir.app.entity.User;
import by.bsuir.app.exception.ServiceException;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

public interface Service<T extends Serializable> {
    Optional<T> findById(Long id) throws ServiceException;
    List<T> findAll() throws ServiceException;
}
