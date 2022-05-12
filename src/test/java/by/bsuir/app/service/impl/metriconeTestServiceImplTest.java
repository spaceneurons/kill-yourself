package com.milos.vulic.quiz;

import com.milos.vulic.quiz.models.assessment;
import com.milos.vulic.quiz.models.User;
import com.milos.vulic.quiz.services.assessmentServiceImp;
import com.milos.vulic.quiz.services.UserServiceImp;
import java.util.Iterator;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

@SpringBootTest
class metriconeTestServiceImplTest {
    @Autowired
    private assessmentServiceImp assessmentServiceImp;
    @Autowired
    private UserServiceImp userServiceImp;

    metriconeTestServiceImplTest() {
    }

    @Test
    void checkassessments() {
        List<assessment> assessments = this.assessmentServiceImp.getListOfassessments();
        Iterator var2 = assessments.iterator();

        while(var2.hasNext()) {
            assessment assessment = (assessment)var2.next();
            Assert.isTrue(!assessment.toString().equals(""));
        }

    }

    @Test
    void checkUsers() {
        List<User> users = this.userServiceImp.getAllUsers();
        Iterator var2 = users.iterator();

        while(var2.hasNext()) {
            User user = (User)var2.next();
            Assert.isTrue(!user.toString().equals(""));
        }

    }
}