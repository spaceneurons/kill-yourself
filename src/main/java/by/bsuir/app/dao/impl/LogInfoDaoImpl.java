package by.bsuir.app.dao.impl;

import by.bsuir.app.dao.AbstractDao;
import by.bsuir.app.dao.LogInfoDao;
import by.bsuir.app.dto.LogInfoDto;
import by.bsuir.app.entity.LogInfo;
import by.bsuir.app.util.QueryTransformer;
import org.hibernate.SessionFactory;
import org.hibernate.query.NativeQuery;
import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class LogInfoDaoImpl extends AbstractDao<LogInfo> implements LogInfoDao {

    private static final String SQL_FIND_ALL_GROUPED_BY_DAYS = "select convert(timestamp, date) as date," +
            " count(*) as visitsCount from log_info group by DATE(timestamp)";

    public LogInfoDaoImpl(SessionFactory sessionFactory) {
        super(sessionFactory, LogInfo.class);
    }

    @Override
    public List<LogInfoDto> findAllGroupedByDays() {
        NativeQuery sqlQuery = getCurrentSession().createSQLQuery(SQL_FIND_ALL_GROUPED_BY_DAYS);
        QueryTransformer queryTransformer = new QueryTransformer();
        Query<LogInfoDto> transformedQuery = queryTransformer.transformToLogInfoDto(sqlQuery);
        return transformedQuery.getResultList();
    }
}
