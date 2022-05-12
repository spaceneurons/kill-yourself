package by.bsuir.app.dao;

import by.bsuir.app.entity.BiochemicalBloodTest;
import by.bsuir.app.entity.GeneralBloodTest;
import by.bsuir.app.pagination.Page;

public interface BiochemicalBloodTestDao extends Dao<BiochemicalBloodTest>{
    Page<BiochemicalBloodTest> findAllByUsername(int i, int size, String username);
    int findAllCountByUsername(String username);
}
