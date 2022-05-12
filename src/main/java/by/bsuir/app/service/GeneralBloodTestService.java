package by.bsuir.app.service;

import by.bsuir.app.dto.GeneralBloodTestDto;
import by.bsuir.app.pagination.Paged;
import by.bsuir.app.entity.GeneralBloodTest;
import by.bsuir.app.exception.ServiceException;

import java.util.List;

public interface GeneralBloodTestService {
    Paged<GeneralBloodTest> getPage(int pageNumber, int size, String username, String lang);
    List<GeneralBloodTest> findAll();
    GeneralBloodTest save(GeneralBloodTestDto test) throws ServiceException;
}
