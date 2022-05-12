package by.bsuir.app.controller.admin;

import by.bsuir.app.dto.LogInfoDto;
import by.bsuir.app.entity.LogInfo;
import by.bsuir.app.exception.ServiceException;
import by.bsuir.app.service.LogInfoService;
import by.bsuir.app.util.DateConverter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/admin/reports")
public class ReportController {

    private final LogInfoService logInfoService;

    public ReportController(LogInfoService logInfoService) {
        this.logInfoService = logInfoService;
    }

    @GetMapping("")
    private String showReportsPage() {
        return "admin/graphics";
    }

    @GetMapping("/api/logs/visits")
    @ResponseBody
    public ResponseEntity<Map<String, Integer>> getGeneralHistoryVisitsChart() {
        try {
            DateConverter dateConverter = new DateConverter();

            List<LogInfoDto> allVisitLogs = logInfoService.findAllGroupedByDays();
            Map<String, Integer> graphData = allVisitLogs.stream()
                    .collect(Collectors.toMap(
                            e -> dateConverter.convertToNewDateFormatString(e.getDate()),
                            LogInfoDto::getVisitsCount,
                            (v1, v2) -> v1,
                            LinkedHashMap::new)
                    );
            return new ResponseEntity<>(graphData, HttpStatus.OK);
        } catch (ServiceException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
