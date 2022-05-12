package by.bsuir.app.dao.impl;

import by.bsuir.app.dao.AbstractDao;
import by.bsuir.app.dao.UserDao;
import by.bsuir.app.entity.User;
import by.bsuir.app.exception.DaoException;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class UserDaoImpl extends AbstractDao<User> implements UserDao {

    private final static String HQL_FIND_BY_ACTIVATION_CODE =
            "select u FROM User u where activationCode.validationCode = :code";

    public UserDaoImpl(SessionFactory sessionFactory) {
        super(sessionFactory, User.class);
    }

    @Override
    public Optional<User> findByUsername(String username) throws DaoException {
        return findByCriteriaSingleResult(username, "username");
    }

    @Override
    public Optional<User> findByEmail(String email) throws DaoException {
        return findByCriteriaSingleResult(email, "email");
    }

    @Override
    public Optional<User> findByActivationCode(String code) {
        List list = getCurrentSession()
                .createQuery(HQL_FIND_BY_ACTIVATION_CODE)
                .setParameter("code", code)
                .getResultList();
        return list.isEmpty() ? Optional.empty() : Optional.of((User) list.get(0));
    }
}
