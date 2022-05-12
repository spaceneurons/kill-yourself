package by.bsuir.app.service.impl;

import by.bsuir.app.dao.BiochemicalBloodTestDao;
import by.bsuir.app.dao.UserDao;
import by.bsuir.app.dto.BiochemicalBloodTestDto;
import by.bsuir.app.entity.BiochemicalBloodTest;
import by.bsuir.app.entity.GeneralBloodTest;
import by.bsuir.app.entity.User;
import by.bsuir.app.exception.DaoException;
import by.bsuir.app.exception.ServiceException;
import by.bsuir.app.pagination.Page;
import by.bsuir.app.pagination.Paged;
import by.bsuir.app.pagination.Paging;
import by.bsuir.app.service.AbstractService;
import by.bsuir.app.service.BiochemicalBloodTestService;
import by.bsuir.app.util.indicator.BiochemicalBloodIndicatorHandler;
import by.bsuir.app.util.indicator.GeneralBloodIndicatorHandler;
import by.bsuir.app.util.indicator.IndicatorHandler;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.Optional;

@Service
public class BiochemicalBloodTestServiceImpl extends AbstractService<BiochemicalBloodTest>
        implements BiochemicalBloodTestService {

    private final UserDao userDao;
    private final BiochemicalBloodTestDao bloodTestDao;

    public BiochemicalBloodTestServiceImpl(UserDao userDao, BiochemicalBloodTestDao bloodTestDao) {
        super(bloodTestDao);
        this.userDao = userDao;
        this.bloodTestDao = bloodTestDao;
    }

    @Override
    @Transactional
    public BiochemicalBloodTest save(BiochemicalBloodTestDto testDto) throws ServiceException {
        BiochemicalBloodTest test = new BiochemicalBloodTest();
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
    public Paged<BiochemicalBloodTest> getPage(int pageNumber, int size, String username, String lang) {
        Page<BiochemicalBloodTest> postPage = bloodTestDao.findAllByUsername(pageNumber - 1, size, username);
        IndicatorHandler<BiochemicalBloodTest> ih = new BiochemicalBloodIndicatorHandler(lang);
        ih.processIndicators(postPage.getObject());
        return new Paged<>(postPage, Paging.of(bloodTestDao.findAllCountByUsername(username), pageNumber, size));
    }

    @Override
    @Transactional
    public boolean addRecommendation(Long userId, Long bloodTestId, String recommendation) {
        try {
            Optional<BiochemicalBloodTest> bloodTestOptional = bloodTestDao.findById(bloodTestId);
            Optional<User> userOptional = userDao.findById(userId);

            if (bloodTestOptional.isPresent()) {
                BiochemicalBloodTest test = bloodTestOptional.get();
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
