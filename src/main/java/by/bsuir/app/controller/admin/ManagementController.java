package by.bsuir.app.controller.admin;

import by.bsuir.app.entity.User;
import by.bsuir.app.entity.enums.Role;
import by.bsuir.app.exception.ServiceException;
import by.bsuir.app.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Controller
@RequestMapping("/admin/management")
public class ManagementController {

    private final UserService userService;

    public ManagementController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("")
    private String showManagementPage(Model model) {
        try {
            List<User> allUsers = userService.findAll();
            model.addAttribute("users", allUsers);
            model.addAttribute("roles", Role.values());
        } catch (ServiceException e) {
            log.error(e.getMessage());
        }
        return "admin/user-management";
    }

    @PostMapping("/blocking/{username}")
    private String changeBlockStatus(@PathVariable String username, Model model) {
        try {
            userService.changeBlockStatusByUsername(username);
        } catch (ServiceException e) {
            model.addAttribute("blockStatusError");
            log.error(e.getMessage());
        }
        return "redirect:/admin/management/";
    }

    @ResponseBody
    @GetMapping("/all")
    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        try {
            users =  userService.findAll();
            return users;
        } catch (ServiceException e) {
            e.printStackTrace();
        }
        return users;
    }
}