package tms.gobike.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tms.gobike.dto.ResetPasswordRequest;
import tms.gobike.model.SecurityQuestion;
import tms.gobike.model.User;
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
    public String resetPassword(ResetPasswordRequest request) {
        log.info("Request for password reset");
        // TODO: Jyoti
        User user = userRepository.findByUserName(request.getUserName());
        if(user!=null){
            if(user.getSecurityQuestion() == request.getQuestion().getId()){

            }
        }
        return null;
    }
}
