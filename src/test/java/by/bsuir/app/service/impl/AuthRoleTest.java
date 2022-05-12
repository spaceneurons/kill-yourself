package com.milos.vulic.quiz;

import com.milos.vulic.quiz.models.Role;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

@SpringBootTest
class AuthRoleTest {
    AuthRoleTest() {
    }

    @Test
    void testRolePARTICIPANT() {
        Role role = Role.ANALITIC;
        Assert.isTrue(Role.valueOf("ANALITIC") == role);
    }

    @Test
    void testRoleADMIN() {
        Role role = Role.ADMIN;
        Assert.isTrue(Role.valueOf("ADMIN") == role);
    }

    @Test
    void testRoleUSER() {
        Role role = Role.USER;
        Assert.isTrue(Role.valueOf("USER") == role);
    }
}