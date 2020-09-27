package tms.gobike.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tms.gobike.repository.UserRepository;

/**
 * @author jbhushan
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class LoginServiceImpl implements LoginService{

    private UserRepository userRepository;

    @Override
    public String retrievePassword() {
        return null;
    }
}
