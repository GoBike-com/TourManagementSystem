package tms.gobike.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class BikerLoginDetailsService implements UserDetailsService {
    /**
     * Locates the user based on the username.
     *
     * @param s the username identifying the user whose data is required.
     *
     * @return a fully populated user record (never `null`)
     *
     * @throws UsernameNotFoundException if the user could not be found or the user has no
     * GrantedAuthority
     */
    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        throw new UsernameNotFoundException("No user with username " + s + " was found.");
     // return new BikerLoginDetails("username", "password"); //can have more parameters. Look at BikerLoginDetails.
    }
}
