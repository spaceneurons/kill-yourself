package com.milos.vulic.quiz;

import com.milos.vulic.quiz.controllers.gradeController;
import com.milos.vulic.quiz.controllers.UserController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

@SpringBootTest
class ControllerTest {
    @Autowired
    private UserController userController;
    @Autowired
    private gradeController gradeController;

    ControllerTest() {
    }

    @Test
    void checkLogin() {
        Assert.isTrue(this.userController.login().equals("home"));
    }

    @Test
    void checkRedirectToRegistrationForm() {
        Assert.isTrue(this.userController.redirectToRegistrationForm().equals("register"));
    }

    @Test
    void checkRedirectTogradesPage() {
        Assert.isTrue(this.gradeController.redirectTogradesPage().equals("grade"));
    }

    @Test
    void checkRedirectToAdminPage() {
        Assert.isTrue(this.userController.redirectToAdminPage().equals("admin"));
    }
}