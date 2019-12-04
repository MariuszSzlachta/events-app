package com.mszlachta.eventsapp.config;

import com.mszlachta.eventsapp.security.model.User;
import com.mszlachta.eventsapp.security.repository.UserDetailsRepository;
import com.mszlachta.eventsapp.security.service.impl.UserDetailsServiceImpl;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private UserDetailsServiceImpl userDetailsService;

    private UserDetailsRepository userDetailsRepository;

    public WebSecurityConfig(final UserDetailsServiceImpl userDetailsService, final UserDetailsRepository userDetailsRepository) {
        this.userDetailsService = userDetailsService;
        this.userDetailsRepository = userDetailsRepository;
    }

    @Override
    protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(final HttpSecurity http) throws Exception {
        http.authorizeRequests()
            .antMatchers(HttpMethod.GET, "/search/event").hasRole("ADMIN")
            .antMatchers(HttpMethod.POST, "/search/event/add").hasRole("ADMIN")
            .antMatchers(HttpMethod.GET, "/search/events").hasRole("ADMIN")
            .requestMatchers(PathRequest.toStaticResources().atCommonLocations()).permitAll()
            .antMatchers("/**").permitAll()
            .and().httpBasic()
            .and().csrf().disable();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @EventListener(ApplicationReadyEvent.class)
    public void get() {
        User user = new User("testUser", passwordEncoder().encode("testUser"), "ROLE_USER");
        User admin = new User("Admin", passwordEncoder().encode("Admin1234"), "ROLE_ADMIN");
        userDetailsRepository.save(user);
        userDetailsRepository.save(admin);
    }
}
