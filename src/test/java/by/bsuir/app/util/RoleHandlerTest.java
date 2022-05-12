package by.bsuir.app.util;

import by.bsuir.app.entity.enums.Role;
import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Set;

public class RoleHandlerTest {

    private final RoleHandler roleHandler = new RoleHandler();

    @Test
    public void testGetLocalizedRoleNamesWithoutUserRoleWhenRu() {
        ArrayList<String> result = roleHandler
                .getLocalizedRoleNamesWithoutUserRole(Role.values(), "ru", Set.of(Role.USER));

        ArrayList<String> expected = new ArrayList<String>() {
            {
                add("аналитик");
                add("Администратор");
            }
        };

        Assert.assertEquals(expected, result);
    }

    @Test
    public void testGetIncorrectLocalizedRoleNamesWithoutUserRoleWhenEnReturnFalse() {
        ArrayList<String> result = roleHandler
                .getLocalizedRoleNamesWithoutUserRole(Role.values(), "en", Set.of(Role.DOCTOR));

        ArrayList<String> expected = new ArrayList<String>() {
            {
                add("аналитик");
                add("Администратор");
            }
        };

        Assert.assertNotEquals(expected, result);
    }

    @Test
    public void testGetRoleFromLocalizedValueWhenEnRole() {
        Role result = roleHandler.getRoleFromLocalizedValue("Admin");
        Assert.assertEquals(Role.ADMIN, result);
    }

    @Test
    public void testGetRoleFromLocalizedValueWhenRuRole() {
        Role result = roleHandler.getRoleFromLocalizedValue("Администратор");
        Assert.assertEquals(Role.ADMIN, result);
    }
}