package tms.gobike.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import tms.gobike.model.User;
import tms.gobike.repository.UserRepository;

/**
 * @author woboland
 */
public class BikerLoginDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

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
            User user = userRepository.findByUserName(s);

            if (user == null) {
                throw new UsernameNotFoundException("Could not find user.");
            }

            return new BikerLoginDetails(user);
    }
}
