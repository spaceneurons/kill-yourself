package by.bsuir.app.dao;

import by.bsuir.app.entity.User;
import by.bsuir.app.exception.DaoException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.io.Serializable;
import java.util.List;
import java.util.Optional;

public abstract class AbstractDao<T extends Serializable> implements Dao<T> {

    private final Class<T> localClass;
    private final SessionFactory sessionFactory;

    public AbstractDao(SessionFactory sessionFactory, Class<T> localClass) {
        this.localClass = localClass;
        this.sessionFactory = sessionFactory;
    }

    @Override
    public Optional<T> findById(Long id) {
        return Optional.ofNullable(getCurrentSession().get(localClass, id));
    }

    @Override
    public List<T> findAll() {
        return getCurrentSession().createQuery("from " + localClass.getName(), localClass).getResultList();
    }


    @Override
    public Long save(T entity) {
        return (Long) getCurrentSession().save(entity);
    }


    @Override
    public void update(T entity) {
        getCurrentSession().update(entity);
    }


    @Override
    public void delete(T entity) {
        getCurrentSession().delete(entity);
    }

    @Override
    public void deleteById(Long entityId) {
        Optional<T> entity = findById(entityId);
        entity.ifPresent(this::delete);
    }

    @Override
    public Optional<T> findByCriteriaSingleResult(String param, String fieldName) throws DaoException {
        List<T> resultList = findByCriteriaList(param, fieldName);

        if (resultList.size() == 0) {
            return Optional.empty();
        } else if (resultList.size() == 1) {
            return Optional.of((T) resultList.get(0));
        } else {
            throw new DaoException("More than 1 result.");
        }
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<T> findByCriteriaList(String param, String fieldName) throws DaoException {
        try {
            Session session = getCurrentSession();
            CriteriaBuilder cb = session.getCriteriaBuilder();
            CriteriaQuery<T> cr = cb.createQuery(localClass);
            Root<T> user = cr.from(localClass);
            cr.select(user).where(cb.equal(user.get(fieldName),param));

            Query query = session.createQuery(cr);
            return (List<T>) query.getResultList();
        } catch (Exception e) {
            throw new DaoException(e);
        }
    }

    protected final Session getCurrentSession() {
        return sessionFactory.getCurrentSession();
    }
}