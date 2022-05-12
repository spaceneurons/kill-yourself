package by.bsuir.app.service;

import by.bsuir.app.dto.BiochemicalBloodTestDto;
import by.bsuir.app.entity.BiochemicalBloodTest;
import by.bsuir.app.exception.ServiceException;
import by.bsuir.app.pagination.Paged;
import org.springframework.http.ResponseEntity;

public interface BiochemicalBloodTestService extends Service<BiochemicalBloodTest> {
    BiochemicalBloodTest save(BiochemicalBloodTestDto test) throws ServiceException;

    Paged<BiochemicalBloodTest> getPage(int pageNumber, int size, String username, String lang);

    boolean addRecommendation(Long userId, Long bloodTestId, String recommendation);
}
