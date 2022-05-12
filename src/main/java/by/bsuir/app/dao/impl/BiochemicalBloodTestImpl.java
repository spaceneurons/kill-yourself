package by.bsuir.app.dao.impl;

import by.bsuir.app.dao.AbstractDao;
import by.bsuir.app.dao.BiochemicalBloodTestDao;
import by.bsuir.app.entity.BiochemicalBloodTest;
import by.bsuir.app.pagination.Page;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.text.DecimalFormat;
import java.util.List;

@Repository
public class BiochemicalBloodTestImpl extends AbstractDao<BiochemicalBloodTest> implements BiochemicalBloodTestDao {

    private final static String HQL_FIND_ALL = "select b FROM BiochemicalBloodTest b where b.user.username = :username";

    public BiochemicalBloodTestImpl(SessionFactory sessionFactory) {
        super(sessionFactory, BiochemicalBloodTest.class);
    }

    @Override
    public Page<BiochemicalBloodTest> findAllByUsername(int pageNumber, int size, String username) {
        List<BiochemicalBloodTest> tests = getCurrentSession()
                .createQuery(HQL_FIND_ALL, BiochemicalBloodTest.class)
                .setParameter("username", username)
                .setFirstResult(pageNumber*size)
                .setMaxResults(size)
                .getResultList();

        for(var test : tests) {
            var customerAcquisitionCost = new DecimalFormat("#0.00").format((test.getProtein() * test.getGlucose()) / test.getCholesterol()).replace(',','.');
            test.setCustomerAcquisitionCost(customerAcquisitionCost);
        }

        return new Page<>(tests);
    }

    @Override
    public int findAllCountByUsername(String username) {
        return getCurrentSession()
                .createQuery(HQL_FIND_ALL, BiochemicalBloodTest.class)
                .setParameter("username", username)
                .getResultList()
                .size();
    }
}
