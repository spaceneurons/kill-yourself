package by.bsuir.app.service;

import by.bsuir.app.dao.Dao;
import by.bsuir.app.entity.User;
import by.bsuir.app.exception.DaoException;
import by.bsuir.app.exception.ServiceException;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

public abstract class AbstractService<T extends Serializable> implements Service<T> {

    protected final Dao<T> dao;

    public AbstractService(Dao<T> dao) {
        this.dao = dao;
    }

    @Override
    @Transactional
    public Optional<T> findById(Long id) throws ServiceException {
        try {
            return dao.findById(id);
        } catch (DaoException e) {
            throw new ServiceException(e);
        }
    }

    @Override
    @Transactional
    public List<T> findAll() {
        return dao.findAll();
    }
}
