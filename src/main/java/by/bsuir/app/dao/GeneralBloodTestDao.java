package by.bsuir.app.dao;

import by.bsuir.app.entity.GeneralBloodTest;
import by.bsuir.app.pagination.Page;
import by.bsuir.app.pagination.Paged;

public interface GeneralBloodTestDao extends Dao<GeneralBloodTest>{
    Page<GeneralBloodTest> findAllByUsername(int pageNumber, int size, String username);

    int findAllCountByUsername(String username);
}
