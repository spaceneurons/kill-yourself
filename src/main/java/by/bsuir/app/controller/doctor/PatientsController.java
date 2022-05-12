package by.bsuir.app.controller.doctor;

import by.bsuir.app.entity.BiochemicalBloodTest;
import by.bsuir.app.entity.GeneralBloodTest;
import by.bsuir.app.service.BiochemicalBloodTestService;
import by.bsuir.app.service.GeneralBloodTestService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/doctor/patients")
public class PatientsController {

    private final BiochemicalBloodTestService biochemicalBloodTestService;
    private final GeneralBloodTestService generalBloodTestService;

    public PatientsController(BiochemicalBloodTestService biochemicalBloodTestService,
                              GeneralBloodTestService generalBloodTestService) {
        this.biochemicalBloodTestService = biochemicalBloodTestService;
        this.generalBloodTestService = generalBloodTestService;
    }

    @GetMapping("")
    public String showPatientsPage(Model model) {
        return "doctor/patients-analyzes";
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
    public  List<BiochemicalBloodTest> wrappedFindAllBiochemicalBlood() {
        return biochemicalBloodTestService.findAll();
    }

    @ResponseBody
    @GetMapping("/generalBlood")
    public List<GeneralBloodTest> findAllGeneralBlood() {
        return generalBloodTestService.findAll();
    }

    @ResponseBody
    @PatchMapping("/bioBlood/{id}")
    public ResponseEntity<?> addBioBloodTestResult(@PathVariable("id") Long bloodTestId,
                                                   @RequestBody Map<String, String> params) {
        biochemicalBloodTestService.addRecommendation(
                Long.parseLong(params.get("userId")),
                bloodTestId,
                params.get("recom").replace("\"", ""));
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
