package by.bsuir.app.controller.analitic;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/analitic/analytics")
public class AnalyticsController {
    @GetMapping("/")
    private String showAnalyticsPage(Model model) {
        throw new UnsupportedOperationException();

    }
}
