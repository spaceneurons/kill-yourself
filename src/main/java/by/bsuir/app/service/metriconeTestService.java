package by.bsuir.app.service;

import by.bsuir.app.dto.metriconeTestDto;
import by.bsuir.app.entity.metriconeTest;
import by.bsuir.app.exception.ServiceException;
import by.bsuir.app.pagination.Paged;
import org.springframework.http.ResponseEntity;

public interface metriconeTestService extends Service<metriconeTest> {
    metriconeTest save(metriconeTestDto test) throws ServiceException;

    Paged<metriconeTest> getPage(int pageNumber, int size, String username, String lang);

    boolean addRecommendation(Long userId, Long bloodTestId, String recommendation);
}
