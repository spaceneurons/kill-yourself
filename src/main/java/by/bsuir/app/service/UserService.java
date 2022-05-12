package by.bsuir.app.service;

import by.bsuir.app.dto.CardDto;
import by.bsuir.app.dto.UserRegistrationDto;
import by.bsuir.app.entity.User;
import by.bsuir.app.exception.ServiceException;
import by.bsuir.app.exception.UserAlreadyExistsException;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

public interface UserService extends Service<User> {
    void save(User user) throws ServiceException;

    CardDto update(CardDto cardDto) throws ServiceException;

    void update(User user) throws ServiceException;

    void changeBlockStatusByUsername(String username) throws ServiceException;

    Optional<User> findById(Long id) throws ServiceException;

    Optional<User> findByUsername(String username) throws ServiceException;

    Optional<User> findByEmail(String email) throws ServiceException;

    User registerNewUserAccount(UserRegistrationDto userRegistrationDto, PasswordEncoder passwordEncoder) throws
            UserAlreadyExistsException,
            ServiceException;

    boolean activateUser(String code);

    void sendRecoveryLink(String email);

    boolean changePassword(Long id, String password, PasswordEncoder pe);

    boolean changeRole(String username, String role);

}
