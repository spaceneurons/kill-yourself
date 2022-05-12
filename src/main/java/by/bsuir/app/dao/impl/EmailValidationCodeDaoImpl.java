package by.bsuir.app.dao.impl;

import by.bsuir.app.dao.AbstractDao;
import by.bsuir.app.dao.EmailValidationCodeDao;
import by.bsuir.app.entity.EmailValidationCode;
import by.bsuir.app.exception.DaoException;
import by.bsuir.app.exception.ServiceException;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public class EmailValidationCodeDaoImpl extends AbstractDao<EmailValidationCode> implements EmailValidationCodeDao{

    public EmailValidationCodeDaoImpl(SessionFactory sessionFactory) {
        super(sessionFactory, EmailValidationCode.class);
    }

    @Override
    public Optional<EmailValidationCode> findByUniqueCode(String code) throws ServiceException {
        try {
            return findByCriteriaSingleResult(code, "validationCode");
        } catch (DaoException e) {
            throw new ServiceException(e);
        }
    }
}
