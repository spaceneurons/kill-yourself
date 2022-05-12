package by.bsuir.app.service.impl;

import by.bsuir.app.dao.LogInfoDao;
import by.bsuir.app.dto.LogInfoDto;
import by.bsuir.app.entity.LogInfo;
import by.bsuir.app.entity.User;
import by.bsuir.app.service.AbstractService;
import by.bsuir.app.service.LogInfoService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class LogInfoServiceImpl extends AbstractService<LogInfo> implements LogInfoService {

    private final LogInfoDao logInfoDao;

    public LogInfoServiceImpl(LogInfoDao logInfoDao) {
        super(logInfoDao);
        this.logInfoDao = logInfoDao;
    }

    @Override
    @Transactional
    public void save(LogInfo logInfo) {
        logInfoDao.save(logInfo);
    }

    @Override
    @Transactional
    public void addLogRecord(User user) {
        LogInfo log = new LogInfo(new Date());
//        user.addLogInfo(log);
    }

    @Override
    @Transactional
    public List<LogInfoDto> findAllGroupedByDays() {
        return logInfoDao.findAllGroupedByDays();
    }
}
