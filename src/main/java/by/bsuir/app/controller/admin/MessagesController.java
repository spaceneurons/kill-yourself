package by.bsuir.app.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin/messages")
public class MessagesController {

    @GetMapping("/")
    private String showMessagesPage(Model model) {
        throw new UnsupportedOperationException();

    }
}
