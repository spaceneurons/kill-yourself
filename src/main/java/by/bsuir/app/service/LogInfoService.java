package by.bsuir.app.service;

import by.bsuir.app.dto.LogInfoDto;
import by.bsuir.app.entity.LogInfo;
import by.bsuir.app.entity.User;
import by.bsuir.app.exception.ServiceException;
import com.mysql.cj.log.Log;

import java.util.List;

public interface LogInfoService {
    void save(LogInfo logInfo);
    void addLogRecord(User user) throws ServiceException;
    List<LogInfo> findAll() throws ServiceException;
    List<LogInfoDto> findAllGroupedByDays() throws ServiceException;
}
