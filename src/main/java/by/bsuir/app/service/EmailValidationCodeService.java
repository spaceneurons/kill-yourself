package by.bsuir.app.service;

import by.bsuir.app.entity.EmailValidationCode;

import java.util.Optional;

public interface EmailValidationCodeService {
    Optional<EmailValidationCode> findByUniqueCode(String replace);
    void delete(EmailValidationCode emailValidationCode);
}
