package by.bsuir.app.controller.user;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

@Controller
@RequestMapping("/user/conclusions")
public class ConclusionsController {
    @GetMapping("")
    private String showConclusionsPage(Principal principal, Model model) {
        model.addAttribute("username", principal.getName());
        model.addAttribute("posts", null);
        return "user/conclusions";
    }
}
