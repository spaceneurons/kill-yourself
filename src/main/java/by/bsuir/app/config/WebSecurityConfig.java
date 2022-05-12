package by.bsuir.app.config;

import by.bsuir.app.entity.enums.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final static String HOME_PAGE_URL = "/";
    private final static int TOKEN_VALIDITY_SECONDS = 2419200;
    private final static int ENCRYPTION_FORCE = 12;

    private UserDetailsService userDetailsService;

    @Autowired
    public void setUserDetailsService(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
                http
//                        .csrf().disable();
                    .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                .and()
                    .authorizeRequests()
                    .antMatchers(HOME_PAGE_URL, "/static/**", "/auth/**").permitAll()
                        .antMatchers("/user/personal/edit/**").hasAnyAuthority(Role.ADMIN.name(), Role.USER.name())
                        .antMatchers("/admin/**").hasAuthority(Role.ADMIN.name())
                        .antMatchers("/user/**").hasAuthority(Role.USER.name())
                        .antMatchers("/doctor/**").hasAuthority(Role.DOCTOR.name())
                        .anyRequest().authenticated()
                        .and().formLogin()
                    .loginPage("/auth/logIn").permitAll()
                    .loginProcessingUrl("/auth/authentication")
                    .defaultSuccessUrl(HOME_PAGE_URL, true)
                .and().logout()
                    .logoutRequestMatcher(new AntPathRequestMatcher("/auth/logout", "POST"))
                    .invalidateHttpSession(true)
                    .clearAuthentication(true)
                    .deleteCookies("JSESSIONID")
                    .logoutSuccessUrl(HOME_PAGE_URL);
//                .and()
//                    .rememberMe()
//                    .tokenValiditySeconds(TOKEN_VALIDITY_SECONDS);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authenticationProvider());
    }

    @Bean
    protected DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider auth = new DaoAuthenticationProvider();
        auth.setPasswordEncoder(passwordEncoder());
        auth.setUserDetailsService(userDetailsService);
        return auth;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(ENCRYPTION_FORCE);
    }
}
