package com.iu.gobike.service;

import com.iu.gobike.constant.GoBikeConstant;
import com.iu.gobike.dto.ResetPasswordRequest;
import com.iu.gobike.exception.ResetPasswordException;
import com.iu.gobike.model.User;
import com.iu.gobike.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.naming.AuthenticationException;

/**
 * @author jbhushan
 */
@Component
@AllArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User login(String userName, String password) throws AuthenticationException{
        log.info("Request for login");
        User user = userRepository.findByUserNameAndPassword(userName,passwordEncoder.encode(password));
        if(user == null){
            throw new AuthenticationException();
        }
        return user;
    }

    @Override
    public String resetPassword(ResetPasswordRequest request) throws ResetPasswordException {
        log.info("Request for password reset");
        User user = userRepository.findByUserName(request.getUserName());
        if(user != null){
            if(user.getSecurityQuestionId() == request.getQuestion() &&
            user.getSecurityQuestionAnswer().equals(request.getAnswer())){
                user.setPassword(passwordEncoder.encode(request.getNewPassword()));
                userRepository.save(user);
                return GoBikeConstant.SUCCESS;
            }
        }
        throw new ResetPasswordException();
    }
}
