package by.bsuir.app.util;

import by.bsuir.app.dto.LogInfoDto;
import org.hibernate.query.NativeQuery;
import org.hibernate.query.Query;
import org.hibernate.transform.ResultTransformer;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;


//  TODO: Replace
@SuppressWarnings("unchecked")
public class QueryTransformer {
    public Query<LogInfoDto> transformToLogInfoDto(NativeQuery sqlQuery) {
        return sqlQuery.setResultTransformer(
                new ResultTransformer() {
                    @Override
                    public Object transformTuple(Object[] tuple, String[] aliases) {
                        BigInteger bigInteger = (BigInteger) tuple[1];
                        return new LogInfoDto((Date) tuple[0], bigInteger.intValue());
                    }
                    @Override
                    public List<LogInfoDto> transformList(List list) {
                        return list;
                    }
                });
    }
}
