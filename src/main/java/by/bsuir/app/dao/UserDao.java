package by.bsuir.app.dao;

import by.bsuir.app.entity.User;
import by.bsuir.app.exception.DaoException;

import java.util.Optional;

public interface UserDao extends Dao<User>{
    Optional<User> findByUsername(String username) throws DaoException;
    Optional<User> findByEmail(String email) throws DaoException;

    Optional<User> findByActivationCode(String code);
}
