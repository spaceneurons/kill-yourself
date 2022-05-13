package com.milos.vulic.quiz;

import com.milos.vulic.quiz.models.OfferedAnswer;
import com.milos.vulic.quiz.models.assessment;
import com.milos.vulic.quiz.models.User;
import com.milos.vulic.quiz.models.UserassessmentAnswer;
import com.milos.vulic.quiz.services.OfferedAnswerService;
import com.milos.vulic.quiz.services.assessmentServiceImp;
import com.milos.vulic.quiz.services.UserassessmentAnswerImp;
import com.milos.vulic.quiz.services.UserServiceImp;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

@SpringBootTest
class UserServiceImplTest {
    @Autowired
    private ServiceException offeredAnswerService;
    @Autowired
    private assessmentServiceImp assessmentServiceImp;
    @Autowired
    private UserassessmentAnswerImp userassessmentAnswerImp;
    @Autowired
    private UserServiceImp userServiceImp;

    UserServiceImplTest() {
    }

    @Test
    void checkOfferedAnswers() {
        List<OfferedAnswer> offeredAnswers = this.offeredAnswerService.getAllTrueOffers();
        Assert.isTrue(offeredAnswers.size() != 0);
    }

    @Test
    void checkassessments() {
        List<assessment> assessments = this.assessmentServiceImp.getListOfassessments();
        Assert.isTrue(assessments.size() != 0);
    }

    @Test
    void checkUserassessments() {
        List<UserassessmentAnswer> userassessments = this.userassessmentAnswerImp.findAll();
        Assert.isTrue(userassessments.size() != 0);
    }

    @Test
    void checkUsers() {
        List<User> users = this.userServiceImp.getAllUsers();
        Assert.isTrue(users.size() != 0);
    }
}