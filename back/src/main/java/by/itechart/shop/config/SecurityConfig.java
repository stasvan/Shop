package by.itechart.shop.config;

import by.itechart.shop.service.security.jwt.JwtConfigurer;
import by.itechart.shop.service.security.jwt.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {


    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //@formatter:off
        http
            .httpBasic().disable()
            .csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
                .authorizeRequests()
//                .antMatchers(HttpMethod.POST, "/signin").permitAll()
                .antMatchers(HttpMethod.GET,"/shop/**").hasRole("admin")
                .antMatchers(HttpMethod.POST,"/shop/**").hasRole("admin")
                .antMatchers(HttpMethod.POST,"/cart/**").authenticated()
                .antMatchers(HttpMethod.GET,"/cart/**").authenticated()
                .antMatchers(HttpMethod.DELETE,"/cart/**").authenticated()
                .antMatchers(HttpMethod.GET,"/address/user/**").authenticated()
                .anyRequest().permitAll()
            .and()
            .apply(new JwtConfigurer(jwtTokenProvider));
        //@formatter:on
    }
}

