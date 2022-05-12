package by.bsuir.app.dao.impl;

import by.bsuir.app.dao.AbstractDao;
import by.bsuir.app.dao.metriconeTestDao;
import by.bsuir.app.entity.metriconeTest;
import by.bsuir.app.pagination.Page;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.text.DecimalFormat;
import java.util.List;

@Repository
public class metriconeTestImpl extends AbstractDao<metriconeTest> implements metriconeTestDao {

    private final static String HQL_FIND_ALL = "select b FROM metriconeTest b where b.user.username = :username";

    public metriconeTestImpl(SessionFactory sessionFactory) {
        super(sessionFactory, metriconeTest.class);
    }

    @Override
    public Page<metriconeTest> findAllByUsername(int pageNumber, int size, String username) {
        List<metriconeTest> tests = getCurrentSession()
                .createQuery(HQL_FIND_ALL, metriconeTest.class)
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
                .createQuery(HQL_FIND_ALL, metriconeTest.class)
                .setParameter("username", username)
                .getResultList()
                .size();
    }
}
