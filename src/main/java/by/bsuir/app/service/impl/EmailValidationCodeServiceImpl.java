package by.bsuir.app.service.impl;

import by.bsuir.app.dao.EmailValidationCodeDao;
import by.bsuir.app.entity.EmailValidationCode;
import by.bsuir.app.service.EmailValidationCodeService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class EmailValidationCodeServiceImpl implements EmailValidationCodeService {

    private final EmailValidationCodeDao emailValidationCodeDao;

    public EmailValidationCodeServiceImpl(EmailValidationCodeDao emailValidationCodeDao) {
        this.emailValidationCodeDao = emailValidationCodeDao;
    }

    @Override
    @Transactional
    public Optional<EmailValidationCode> findByUniqueCode(String code) {
        return emailValidationCodeDao.findByUniqueCode(code);
    }

    @Override
    @Transactional
    public void delete(EmailValidationCode emailValidationCode) {
        emailValidationCodeDao.delete(emailValidationCode);
    }
}
