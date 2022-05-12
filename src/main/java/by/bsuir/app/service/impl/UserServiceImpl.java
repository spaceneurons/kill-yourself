package by.bsuir.app.service.impl;

import by.bsuir.app.dao.Dao;
import by.bsuir.app.dao.EmailValidationCodeDao;
import by.bsuir.app.dao.UserDao;
import by.bsuir.app.dto.CardDto;
import by.bsuir.app.dto.UserRegistrationDto;
import by.bsuir.app.entity.EmailValidationCode;
import by.bsuir.app.entity.User;
import by.bsuir.app.entity.UserCard;
import by.bsuir.app.entity.enums.Role;
import by.bsuir.app.exception.DaoException;
import by.bsuir.app.exception.EmailNotFoundException;
import by.bsuir.app.exception.ServiceException;
import by.bsuir.app.exception.UserAlreadyExistsException;
import by.bsuir.app.service.AbstractService;
import by.bsuir.app.service.UserService;
import by.bsuir.app.util.RoleHandler;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@Transactional
public class UserServiceImpl extends AbstractService<User> implements UserService {

    private final UserDao userDao;
    private final EmailValidationCodeDao emailValidationCodeDao;

    @Value("${server.url}")
    private String serverUrl;
    private final MailSender mailSender;

    public UserServiceImpl(Dao<User> dao, UserDao userDao, EmailValidationCodeDao emailValidationCodeDao,
                           MailSender mailSender) {
        super(dao);
        this.userDao = userDao;
        this.emailValidationCodeDao = emailValidationCodeDao;
        this.mailSender = mailSender;
    }

    @Override
    public void save(User user) throws ServiceException {
        userDao.save(user);
    }

    @Override
    public CardDto update(CardDto cardDto) throws ServiceException {
        try {
            Optional<User> optionalUser = userDao.findById(cardDto.getId());
            if (optionalUser.isPresent()) {
                User user = optionalUser.get();
                user.setUsername(cardDto.getUsername());
                user.setEmail(cardDto.getEmail());
                UserCard userCard = user.getCard();
                if (userCard == null) {
                    userCard = new UserCard();
                    userCard.setUser(user);
                }
                userCard.setName(cardDto.getName());
                userCard.setSurname(cardDto.getSurname());
                userCard.setThirdName(cardDto.getThirdName());
                userCard.setBirthday(cardDto.getBirthday());
                userCard.setGender(cardDto.getGender());
                userCard.setMobile(cardDto.getMobile());

                user.setCard(userCard);
                userDao.update(user);
            }
            return cardDto;

        } catch (DaoException e) {
            throw new ServiceException(e);
        }
    }

    @Override
    public void update(User user) throws ServiceException {
        userDao.update(user);
    }

    @Override
    public void changeBlockStatusByUsername(String username) throws ServiceException {
        try {
            Optional<User> optionalUser = userDao.findByUsername(username);
            if (optionalUser.isPresent()) {
                User user = optionalUser.get();
                user.setBlocked(!user.isBlocked());
                userDao.update(user);
            }
        } catch (DaoException e) {
            throw new ServiceException(e);
        }
    }

    @Override
    public Optional<User> findByUsername(String username) throws ServiceException {
        try {
            return userDao.findByUsername(username);
        } catch (DaoException e) {
            throw new ServiceException(e);
        }
    }

    @Override
    public Optional<User> findByEmail(String email) throws ServiceException {
        try {
            return userDao.findByEmail(email);
        } catch (DaoException e) {
            throw new ServiceException(e);
        }
    }

    @Override
    public User registerNewUserAccount(UserRegistrationDto userRegistrationDto, PasswordEncoder passwordEncoder) throws
            UserAlreadyExistsException, ServiceException {

        if (findByUsername(userRegistrationDto.getUsername()).isPresent()) {
            throw new UserAlreadyExistsException("There is an account with the same login: "
                    + userRegistrationDto.getUsername());
        }

        if (findByEmail(userRegistrationDto.getEmail()).isPresent()) {
            throw new UserAlreadyExistsException("There is an account with the same email: "
                    + userRegistrationDto.getUsername());
        }

        User user = new User();
        user.setUsername(userRegistrationDto.getUsername());
        user.setPassword(passwordEncoder.encode(userRegistrationDto.getPassword()));
        user.setEmail(userRegistrationDto.getEmail());
        user.setRoles(Set.of(Role.USER));

        String uuidCode = UUID.randomUUID().toString();
        EmailValidationCode code = new EmailValidationCode(uuidCode);
        user.setActivationCode(code);

        user.setId(userDao.save(user));
        user.setActivationCode(code);
        code.setUser(user);
        emailValidationCodeDao.save(code);

        String message = String.format(
                "Welcome to Aduline. Follow the link for activation: %s",
                serverUrl + "auth/activation/" + uuidCode);

        mailSender.send(user.getEmail(), "Activation", message);
        return user;
    }

    @Override
    public boolean activateUser(String code) {
        Optional<User> userOptional = userDao.findByActivationCode(code);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setMonitored(true);

            EmailValidationCode codeEntity = user.getActivationCode();
            user.setActivationCode(null);
            codeEntity.setUser(null);
            emailValidationCodeDao.update(codeEntity);
            dao.update(user);

            return true;
        }
        return false;
    }

    @Override
    @Transactional
    public void sendRecoveryLink(String email) {
        Optional<User> optionalUser = findByEmail(email);
        if (optionalUser.isPresent()) {
            String uuidCode = UUID.randomUUID().toString();
            EmailValidationCode emailCode = new EmailValidationCode(uuidCode);
            User user = optionalUser.get();

            emailCode.setUser(user);
            emailValidationCodeDao.save(emailCode);
            String message = String.format("To reset your password, please follow the link: %s",
                    serverUrl + "auth/reset/password/" + uuidCode);
            mailSender.send(email, "Password recovery", message);
        } else {
            throw new EmailNotFoundException("Email hasn't found: " + email);
        }
    }

    @Override
    public boolean changePassword(Long id, String password, PasswordEncoder passwordEncoder) {
        try {
            Optional<User> userOptional = userDao.findById(id);
            if (userOptional.isPresent()) {
                User user = userOptional.get();
                user.setPassword(passwordEncoder.encode(password));
                userDao.update(user);
                return true;
            }
            return false;
        } catch (DaoException e) {
            throw new ServiceException(e);
        }
    }

    @Override
    public boolean changeRole(String username, String roleString) {
        try {
            Optional<User> userOptional = userDao.findByUsername(username);
            if (userOptional.isPresent()) {
                RoleHandler roleHandler = new RoleHandler();
                System.out.println(roleString);
                Role role = roleHandler.getRoleFromLocalizedValue(roleString);

                User user = userOptional.get();
                user.setRoles(Set.of(role));
                userDao.update(user);

                return true;
            }
            return false;
        } catch (DaoException e) {
            throw new ServiceException(e);
        }
    }
}
