package by.bsuir.app.dao;

import by.bsuir.app.entity.metriconeTest;
import by.bsuir.app.entity.GeneralBloodTest;
import by.bsuir.app.pagination.Page;

public interface metriconeTestDao extends Dao<metriconeTest>{
    Page<metriconeTest> findAllByUsername(int i, int size, String username);
    int findAllCountByUsername(String username);
}
