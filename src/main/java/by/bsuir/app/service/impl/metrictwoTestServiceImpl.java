package by.bsuir.app.service.impl;
import org.springframework.transaction.annotation.Transactional;
import by.bsuir.app.dao.metrictwoTestDao;
import by.bsuir.app.dao.UserDao;
import by.bsuir.app.dto.metrictwoTestDto;
import by.bsuir.app.entity.metrictwoTest;
import by.bsuir.app.entity.User;
import by.bsuir.app.exception.DaoException;
import by.bsuir.app.exception.ServiceException;
import by.bsuir.app.pagination.Page;
import by.bsuir.app.pagination.Paged;
import by.bsuir.app.pagination.Paging;
import by.bsuir.app.service.AbstractService;
import by.bsuir.app.service.metrictwoTestService;
import by.bsuir.app.util.indicator.metrictwoIndicatorHandler;
import by.bsuir.app.util.indicator.IndicatorHandler;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.Optional;

@Service
public class metrictwoTestServiceImpl extends AbstractService<metrictwoTest> implements metrictwoTestService {

    private final metrictwoTestDao bloodTestDao;
    private final UserDao userDao;

    public metrictwoTestServiceImpl(metrictwoTestDao bloodTestDao, UserDao userDao) {
        super(bloodTestDao);
        this.bloodTestDao = bloodTestDao;
        this.userDao = userDao;
    }

    @Override
    @Transactional
    public Paged<metrictwoTest> getPage(int pageNumber, int size, String username, String lang) {
        Page<metrictwoTest> postPage = bloodTestDao.findAllByUsername(pageNumber - 1, size, username);
        IndicatorHandler<metrictwoTest> ih = new metrictwoIndicatorHandler(lang);
        ih.processIndicators(postPage.getObject());
        return new Paged<>(postPage, Paging.of(bloodTestDao.findAllCountByUsername(username), pageNumber, size));
    }

    @Override
    @Transactional
    public metrictwoTest save(metrictwoTestDto testDto) throws ServiceException {
        metrictwoTest test = new metrictwoTest();
        try {
            Optional<User> userOptional = userDao.findByUsername(testDto.getUsername());
            if (userOptional.isPresent()) {
                test.setErythrocytes(testDto.getErythrocytes());
                test.setLeukocytes(testDto.getLeukocytes());
                test.setHemoglobinValue(testDto.getHemoglobinValue());
                test.setUser(userOptional.get());
                test.setCreatedOn(new Date());
                bloodTestDao.save(test);
            }
            return test;
        } catch (DaoException e) {
            throw new ServiceException(e);
        }
    }
}
