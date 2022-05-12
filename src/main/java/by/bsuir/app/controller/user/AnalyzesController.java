package by.bsuir.app.controller.user;

import by.bsuir.app.dto.metriconeTestDto;
import by.bsuir.app.dto.metrictwoTestDto;
import by.bsuir.app.entity.metriconeTest;
import by.bsuir.app.entity.metrictwoTest;
import by.bsuir.app.exception.ServiceException;
import by.bsuir.app.pagination.Paged;
import by.bsuir.app.service.metriconeTestService;
import by.bsuir.app.service.metrictwoTestService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@Slf4j
@Controller
@RequestMapping("/user/analyzes")
public class AnalyzesController {

    private final metriconeTestService metriconeTestService;
    private final metrictwoTestService generalBloodTestService;

    public AnalyzesController(metriconeTestService metriconeTestService,
                              metrictwoTestService generalBloodTestService) {
        this.metriconeTestService = metriconeTestService;
        this.generalBloodTestService = generalBloodTestService;
    }

    @GetMapping("")
    private String showAnalyzesPage(Principal user, Model model) {
        model.addAttribute("username", user.getName());
        model.addAttribute("bio_blood", new metriconeTestDto());
        model.addAttribute("general_blood", new metrictwoTestDto());
        return "user/analyzes";
    }

    @ResponseBody
    @PostMapping("/add/metricone/{username}")
    public ResponseEntity<metriconeTest> addmetriconeTest(@RequestBody @Valid metriconeTestDto dto) {
        try {
            return new ResponseEntity<>(metriconeTestService.save(dto), HttpStatus.CREATED);
        } catch (ServiceException e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ResponseBody
    @GetMapping("/metricone/{username}")
    public Paged<metriconeTest> findAllmetriconeWithPagination(
            @PathVariable String username, @CookieValue(value = "lang", defaultValue = "ru") String lang,
            @RequestParam(value = "pageNumber", required = false, defaultValue = "1") int pageNumber,
            @RequestParam(value = "size", required = false, defaultValue = "1") int size
    ) {
        return metriconeTestService.getPage(pageNumber, size, username, lang);
    }

    @ResponseBody
    @PostMapping("/add/generalBlood/{username}")
    public ResponseEntity<metrictwoTest> addGeneralBloodTest(@RequestBody @Valid metrictwoTestDto dto) {
        try {
            return new ResponseEntity<>(generalBloodTestService.save(dto), HttpStatus.CREATED);
        } catch (ServiceException e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ResponseBody
    @GetMapping("/generalBlood/{username}")
    public Paged<metrictwoTest> findAllGeneralBloodWithPagination(
            @PathVariable String username, @CookieValue(value = "lang", defaultValue = "ru") String lang,
            @RequestParam(value = "pageNumber", required = false, defaultValue = "1") int pageNumber,
            @RequestParam(value = "size", required = false, defaultValue = "1") int size) {
        return generalBloodTestService.getPage(pageNumber, size, username, lang);
    }
}
