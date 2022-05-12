package by.bsuir.app.service.impl;
import org.springframework.transaction.annotation.Transactional;
import by.bsuir.app.dao.GeneralBloodTestDao;
import by.bsuir.app.dao.UserDao;
import by.bsuir.app.dto.GeneralBloodTestDto;
import by.bsuir.app.entity.GeneralBloodTest;
import by.bsuir.app.entity.User;
import by.bsuir.app.exception.DaoException;
import by.bsuir.app.exception.ServiceException;
import by.bsuir.app.pagination.Page;
import by.bsuir.app.pagination.Paged;
import by.bsuir.app.pagination.Paging;
import by.bsuir.app.service.AbstractService;
import by.bsuir.app.service.GeneralBloodTestService;
import by.bsuir.app.util.indicator.GeneralBloodIndicatorHandler;
import by.bsuir.app.util.indicator.IndicatorHandler;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.Optional;

@Service
public class GeneralBloodTestServiceImpl extends AbstractService<GeneralBloodTest> implements GeneralBloodTestService {

    private final GeneralBloodTestDao bloodTestDao;
    private final UserDao userDao;

    public GeneralBloodTestServiceImpl(GeneralBloodTestDao bloodTestDao, UserDao userDao) {
        super(bloodTestDao);
        this.bloodTestDao = bloodTestDao;
        this.userDao = userDao;
    }

    @Override
    @Transactional
    public Paged<GeneralBloodTest> getPage(int pageNumber, int size, String username, String lang) {
        Page<GeneralBloodTest> postPage = bloodTestDao.findAllByUsername(pageNumber - 1, size, username);
        IndicatorHandler<GeneralBloodTest> ih = new GeneralBloodIndicatorHandler(lang);
        ih.processIndicators(postPage.getObject());
        return new Paged<>(postPage, Paging.of(bloodTestDao.findAllCountByUsername(username), pageNumber, size));
    }

    @Override
    @Transactional
    public GeneralBloodTest save(GeneralBloodTestDto testDto) throws ServiceException {
        GeneralBloodTest test = new GeneralBloodTest();
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
