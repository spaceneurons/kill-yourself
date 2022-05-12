package by.bsuir.app.service;

import by.bsuir.app.dto.metrictwoTestDto;
import by.bsuir.app.pagination.Paged;
import by.bsuir.app.entity.metrictwoTest;
import by.bsuir.app.exception.ServiceException;

import java.util.List;

public interface metrictwoTestService {
    Paged<metrictwoTest> getPage(int pageNumber, int size, String username, String lang);
    List<metrictwoTest> findAll();
    metrictwoTest save(metrictwoTestDto test) throws ServiceException;
}
