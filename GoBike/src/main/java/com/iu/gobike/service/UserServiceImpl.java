package com.iu.gobike.service;

import com.iu.gobike.constant.GoBikeConstant;
import com.iu.gobike.dto.RegisterUserRequest;
import com.iu.gobike.dto.ResetPasswordRequest;
import com.iu.gobike.exception.ResetPasswordException;
import com.iu.gobike.model.User;
import com.iu.gobike.repository.UserRepository;
import com.iu.gobike.util.EncryptionUtil;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.naming.AuthenticationException;
import javax.persistence.EntityExistsException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;

/**
 * @author jbhushan
 */
@Component
@AllArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void register(RegisterUserRequest request, String password) throws EntityExistsException, InvalidKeySpecException, NoSuchAlgorithmException {
        String email = request.getEmail();
        String userName = request.getUserName();
        Long phone = Long.parseLong(request.getPhone());
        User user = userRepository.findByUserNameOrEmailOrPhone(request.getUserName(), request.getEmail(), Long.parseLong(request.getPhone()));
        if(user == null) {
            user = User.builder().userName(userName).email(email).password(EncryptionUtil.encrypt(password))
                    .phone(phone).lastName(request.getLastName()).firstName(request.getLastName())
                    .city(request.getCity()).securityQuestionId(request.getQuestion()).securityQuestionAnswer(request.getAnswer())
                    .build();
            userRepository.save(user);
        } else {
            String attribute = null;
            if(email.equalsIgnoreCase(user.getEmail())){
                attribute = "email";
            } else if(userName.equalsIgnoreCase(user.getUserName())){
                attribute = "userName";
            }else{
                attribute ="phone";
            }
            throw new EntityExistsException(attribute);
        }
    }

    @Override
    public User login(String userName, String password) throws AuthenticationException, InvalidKeySpecException, NoSuchAlgorithmException {
        log.info("Request for login");
        User user = userRepository.findByUserNameAndPassword(userName, EncryptionUtil.encrypt(password));
        if(user == null){
            throw new AuthenticationException();
        }
        return user;
    }

    @Override
    public String resetPassword(ResetPasswordRequest request) throws ResetPasswordException, InvalidKeySpecException, NoSuchAlgorithmException {
        log.info("Request for password reset");
        User user = userRepository.findByUserName(request.getUserName());
        if(user != null){
            if(user.getSecurityQuestionId() == request.getQuestion() &&
            user.getSecurityQuestionAnswer().equals(request.getAnswer())){
                user.setPassword(EncryptionUtil.encrypt(request.getNewPassword()));
                userRepository.save(user);
                return GoBikeConstant.SUCCESS;
            }
        }
        throw new ResetPasswordException();
    }

    @Override
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }
}
