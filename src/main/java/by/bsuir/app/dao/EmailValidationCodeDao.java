package by.bsuir.app.dao;

import by.bsuir.app.entity.EmailValidationCode;
import by.bsuir.app.exception.ServiceException;

import java.util.Optional;

public interface EmailValidationCodeDao extends Dao<EmailValidationCode> {
    Optional<EmailValidationCode> findByUniqueCode(String code) throws ServiceException;
}
