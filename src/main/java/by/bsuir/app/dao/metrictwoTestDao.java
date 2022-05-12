package by.bsuir.app.dao;

import by.bsuir.app.entity.metrictwoTest;
import by.bsuir.app.pagination.Page;
import by.bsuir.app.pagination.Paged;

public interface metrictwoTestDao extends Dao<metrictwoTest>{
    Page<metrictwoTest> findAllByUsername(int pageNumber, int size, String username);

    int findAllCountByUsername(String username);
}
