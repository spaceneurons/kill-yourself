package by.bsuir.app.dao.impl;

import by.bsuir.app.dao.AbstractDao;
import by.bsuir.app.dao.metrictwoTestDao;
import by.bsuir.app.entity.metrictwoTest;
import by.bsuir.app.pagination.Page;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.text.DecimalFormat;
import java.util.List;

@Repository
public class metrictwoTestImpl extends AbstractDao<metrictwoTest> implements metrictwoTestDao {

    private final static String HQL_FIND_ALL = "select g FROM metrictwoTest g where g.user.username = :username";
    public metrictwoTestImpl(SessionFactory sessionFactory) {
        super(sessionFactory, metrictwoTest.class);
    }

    @Override
    public Page<metrictwoTest> findAllByUsername(int pageNumber, int size, String username) {
        List<metrictwoTest> tests = getCurrentSession()
                .createQuery(HQL_FIND_ALL, metrictwoTest.class)
                .setParameter("username", username)
                .setFirstResult(pageNumber*size)
                .setMaxResults(size)
                .getResultList();

        for(var test : tests) {
            var totalMonthlyIncome = new DecimalFormat("#0.00").format((test.getLeukocytes() / test.getHemoglobinValue()) * test.getErythrocytes()).replace(',','.');
            test.setTotalMonthlyIncome(totalMonthlyIncome);
        }

        return new Page<>(tests);
    }

    @Override
    public int findAllCountByUsername(String username) {
        return getCurrentSession()
                .createQuery(HQL_FIND_ALL, metrictwoTest.class)
                .setParameter("username", username)
                .getResultList()
                .size();
    }
}
