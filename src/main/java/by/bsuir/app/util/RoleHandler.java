package by.bsuir.app.util;

import by.bsuir.app.entity.enums.Role;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

public class RoleHandler {

    public ArrayList<String> getLocalizedRoleNamesWithoutUserRole(Role[] allRoles, String lang, Set<Role> userRole) {
        Set<Role> allRolesSet = new HashSet<>(Set.of(allRoles));
        allRolesSet.removeAll(userRole);
        return getLocalizedRoleNames(allRolesSet, lang);
    }

    public ArrayList<String> getLocalizedRoleNames(Set<Role> roles, String lang) {
        ArrayList<String> localizedRoles = new ArrayList<>();
        roles.forEach(role -> {
            if (lang.equals("en")) {
                localizedRoles.add(role.getEn());
            } else {
                localizedRoles.add(role.getRu());
            }
        });
        return localizedRoles;
    }

    public Role getRoleFromLocalizedValue(String roleString) {
        for (Role role: Role.values()) {
            if (role.getEn().equals(roleString) || role.getRu().equals(roleString)) {
                return role;
            }
        }
        return Role.USER;
    }
}
