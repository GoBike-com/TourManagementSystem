package tms.GoBike.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    /**
     * Allows restricting certain pages to only authenticated users. You may need to check against the "anonymous"
     * authenticated user.
     */
    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
//                .antMatchers("/restricted").authenticated()
                .anyRequest().authenticated() //remove this to allow access to the site
                .and()
                .formLogin()
                .and()
                .httpBasic();
    }

    /**
     * Allows setting up details service for use with an authorization service.
     */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        auth.userDetailsService(new BikerLoginDetailsService());
    }
}
