package by.bsuir.app.controller.analitic;

import by.bsuir.app.entity.metriconeTest;
import by.bsuir.app.entity.metrictwoTest;
import by.bsuir.app.service.metriconeTestService;
import by.bsuir.app.service.metrictwoTestService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/analitic/clients")
public class clientsController {

    private final metriconeTestService metriconeTestService;
    private final metrictwoTestService generalBloodTestService;

    public clientsController(metriconeTestService metriconeTestService,
                              metrictwoTestService generalBloodTestService) {
        this.metriconeTestService = metriconeTestService;
        this.generalBloodTestService = generalBloodTestService;
    }

    @GetMapping("")
    public String showclientsPage(Model model) {
        return "analitic/clients-analyzes";
    }

    @ResponseBody
    @PutMapping("comment/bioBlood/{username}")
    public ResponseEntity<?> setRecommendationBio(@PathVariable String username, @RequestBody Map<String, String> params) {

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("comment/generalBlood/{username}")
    public ResponseEntity<?> setRecommendationGeneral(@PathVariable String username, @RequestBody Map<String, String> params) {

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @ResponseBody
    @GetMapping("/bioBlood")
    public  List<metriconeTest> wrappedFindAllmetricone() {
        return metriconeTestService.findAll();
    }

    @ResponseBody
    @GetMapping("/generalBlood")
    public List<metrictwoTest> findAllGeneralBlood() {
        return generalBloodTestService.findAll();
    }

    @ResponseBody
    @PatchMapping("/bioBlood/{id}")
    public ResponseEntity<?> addBioBloodTestResult(@PathVariable("id") Long bloodTestId,
                                                   @RequestBody Map<String, String> params) {
        metriconeTestService.addRecommendation(
                Long.parseLong(params.get("userId")),
                bloodTestId,
                params.get("recom").replace("\"", ""));
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
