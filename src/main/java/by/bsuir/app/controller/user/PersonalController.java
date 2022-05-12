package by.bsuir.app.controller.user;

import by.bsuir.app.dto.CardDto;
import by.bsuir.app.entity.User;
import by.bsuir.app.entity.enums.Gender;
import by.bsuir.app.entity.enums.Role;
import by.bsuir.app.exception.ServiceException;
import by.bsuir.app.service.UserService;
import by.bsuir.app.util.RoleHandler;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.*;

@Slf4j
@Controller
@RequestMapping("/user/personal")
public class PersonalController {

    private final UserService userService;

    public PersonalController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    private String showPersonalPage(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        try {
            Optional<User> userOptional = userService.findByUsername(username);
            if (userOptional.isPresent()) {
                User user = userOptional.get();
                model.addAttribute("user", user);
                model.addAttribute("username", user.getUsername());
                model.addAttribute("genders", Gender.values());
                model.addAttribute("roles", user.getRoles());
            }
        } catch (ServiceException e) {
            model.addAttribute("loadingFail", "true");
            log.error(e.getMessage());
        }
        return "user/personal";
    }

    //    @PreAuthorize("hasAuthority('ADMIN') and hasAuthority('USER')")
    @GetMapping("/edit/{username}")
    private String showEditPersonalPage(@PathVariable String username, Model model) {
        try {
            RoleHandler roleHandler = new RoleHandler();
            String userWebLanguage = LocaleContextHolder.getLocale().toString();

            Optional<User> optionalUser = userService.findByUsername(username);
            if (optionalUser.isPresent()) {
                User user = optionalUser.get();
                CardDto userDto = CardDto.fromUser(user, userWebLanguage);
                ArrayList<String> localizedRoleNamesWithoutUserRole = roleHandler
                        .getLocalizedRoleNamesWithoutUserRole(Role.values(), userWebLanguage, user.getRoles());

                model.addAttribute("cardDto", userDto);
                model.addAttribute("genders", Gender.values());
                model.addAttribute("roles", localizedRoleNamesWithoutUserRole);
            } else {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                        String.format("Entity with username: %s not " + "found", username));
            }
        } catch (ServiceException e) {
            log.error(e.getMessage());
        }
        return "user/personal-edit";
    }

    @PostMapping("/edit/{username}")
    @ResponseBody
    private ResponseEntity<CardDto> editPersonalData(@RequestBody @Valid CardDto cardDto) {
        try {
            return new ResponseEntity<>(userService.update(cardDto), HttpStatus.CREATED);
        } catch (ServiceException e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/edit/{username}/role")
    @ResponseBody
    private ResponseEntity<?> editUserRole(@PathVariable String username, @RequestBody String newUserRole) {
        try {
            boolean isRoleChanged = userService.changeRole(username, newUserRole.replace("\"", ""));
            return new ResponseEntity<>(isRoleChanged, HttpStatus.CREATED);
        } catch (ServiceException e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

