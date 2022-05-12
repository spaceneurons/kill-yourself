package by.bsuir.app.service.impl;

import by.bsuir.app.dao.metriconeTestDao;
import by.bsuir.app.dao.UserDao;
import by.bsuir.app.dto.metriconeTestDto;
import by.bsuir.app.entity.metriconeTest;
import by.bsuir.app.entity.GeneralBloodTest;
import by.bsuir.app.entity.User;
import by.bsuir.app.exception.DaoException;
import by.bsuir.app.exception.ServiceException;
import by.bsuir.app.pagination.Page;
import by.bsuir.app.pagination.Paged;
import by.bsuir.app.pagination.Paging;
import by.bsuir.app.service.AbstractService;
import by.bsuir.app.service.metriconeTestService;
import by.bsuir.app.util.indicator.metriconeIndicatorHandler;
import by.bsuir.app.util.indicator.GeneralBloodIndicatorHandler;
import by.bsuir.app.util.indicator.IndicatorHandler;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.Optional;

@Service
public class metriconeTestServiceImpl extends AbstractService<metriconeTest>
        implements metriconeTestService {

    private final UserDao userDao;
    private final metriconeTestDao bloodTestDao;

    public metriconeTestServiceImpl(UserDao userDao, metriconeTestDao bloodTestDao) {
        super(bloodTestDao);
        this.userDao = userDao;
        this.bloodTestDao = bloodTestDao;
    }

    @Override
    @Transactional
    public metriconeTest save(metriconeTestDto testDto) throws ServiceException {
        metriconeTest test = new metriconeTest();
        try {
            Optional<User> userOptional = userDao.findByUsername(testDto.getUsername());
            if (userOptional.isPresent()) {
                test.setCholesterol(testDto.getCholesterol());
                test.setGlucose(testDto.getGlucose());
                test.setProtein(testDto.getProtein());
                test.setUser(userOptional.get());
                test.setCreatedOn(new Date());
                bloodTestDao.save(test);
            }

            return test;
        } catch (DaoException e) {
            throw new ServiceException(e);
        }
    }

    @Override
    @Transactional
    public Paged<metriconeTest> getPage(int pageNumber, int size, String username, String lang) {
        Page<metriconeTest> postPage = bloodTestDao.findAllByUsername(pageNumber - 1, size, username);
        IndicatorHandler<metriconeTest> ih = new metriconeIndicatorHandler(lang);
        ih.processIndicators(postPage.getObject());
        return new Paged<>(postPage, Paging.of(bloodTestDao.findAllCountByUsername(username), pageNumber, size));
    }

    @Override
    @Transactional
    public boolean addRecommendation(Long userId, Long bloodTestId, String recommendation) {
        try {
            Optional<metriconeTest> bloodTestOptional = bloodTestDao.findById(bloodTestId);
            Optional<User> userOptional = userDao.findById(userId);

            if (bloodTestOptional.isPresent()) {
                metriconeTest test = bloodTestOptional.get();
                test.setResult(recommendation);
                userOptional.ifPresent(test::setUser);
                bloodTestDao.update(test);
                return true;

            }
            return false;
        } catch (DaoException e) {
            throw new ServiceException(e);
        }
    }
}
