package by.bsuir.app.dao;

import by.bsuir.app.dto.LogInfoDto;
import by.bsuir.app.entity.LogInfo;

import java.util.List;

public interface LogInfoDao extends Dao<LogInfo>{
    List<LogInfoDto> findAllGroupedByDays();
}
