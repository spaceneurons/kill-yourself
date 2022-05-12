package by.bsuir.app.entity.enums;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Set;
import java.util.stream.Collectors;

public enum Role {
    ADMIN(1,"Администратор", Set.of(Permission.DEVELOPERS_WRITE)),
    USER(2,"Пользователь", Set.of(Permission.DEVELOPERS_READ)),
    DOCTOR(3,"Аналитик", Set.of(Permission.DEVELOPERS_READ));

    private final int roleCode;
    private final Set<Permission> permissions;

    private final String stateRu;

    Role(int roleCode,String stateRu, Set<Permission> permissions) {
        this.roleCode = roleCode;
        this.permissions = permissions;
        this.stateRu = stateRu;
    }

    public int getRoleCode() {
        return roleCode;
    }

    public Set<Permission> getPermissions() {
        return permissions;
    }

    public Set<SimpleGrantedAuthority> getAuthorities() {
        return getPermissions().stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toSet());
    }

    public String getRu() {
        return stateRu;
    }

    public String getEn() {
        String word = this.name();
        return word.charAt(0) + word.substring(1).toLowerCase();
    }
}
