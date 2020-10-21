package com.iu.gobike.service;

import com.iu.gobike.constant.GoBikeConstant;
import com.iu.gobike.dto.RegisterUserRequest;
import com.iu.gobike.dto.ResetPasswordRequest;
import com.iu.gobike.exception.ResetPasswordException;
import com.iu.gobike.model.User;
import com.iu.gobike.repository.UserRepository;
import com.iu.gobike.util.EncryptDecryptUtil;
import com.iu.gobike.util.GoBikeUtil;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.naming.AuthenticationException;
import javax.persistence.EntityExistsException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.HashMap;
import java.util.Map;

/**
 * @author jbhushan
 */
@Component
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Value("${secret}")
    private String secretKey;

    @Override
    public void register(RegisterUserRequest request, String password) throws EntityExistsException, InvalidKeySpecException, NoSuchAlgorithmException {
        String email = request.getEmail();
        String userName = request.getUserName();
       // Long phone = Long.parseLong(request.getPhone());
        User user = userRepository.findByUserNameOrEmail(request.getUserName(), request.getEmail());
        if(user == null) {
            user = User.builder().userName(userName).email(email).password(EncryptDecryptUtil.encrypt(password,secretKey))
                    .lastName(request.getLastName()).firstName(request.getFirstName())
                    .city(request.getCity()).build();
            userRepository.save(user);
        } else {
            String attribute = null;
            if(email.equalsIgnoreCase(user.getEmail())){
                attribute = "email";
            } else if(userName.equalsIgnoreCase(user.getUserName())){
                attribute = "userName";
            }
            throw new EntityExistsException(attribute);
        }
    }

    @Override
    public User login(String userName, String password) throws AuthenticationException, InvalidKeySpecException, NoSuchAlgorithmException, IllegalBlockSizeException, InvalidKeyException, BadPaddingException, NoSuchPaddingException {
        log.info("Request for login");
        User user = userRepository.findByUserName(userName);
        if(user != null){
            String decryptedPassword = EncryptDecryptUtil.decrypt(user.getPassword(),secretKey);
            if(decryptedPassword.equals(password)){
                return user;
            }
        }
        throw new AuthenticationException();
    }

    @Override
    public String resetPassword(ResetPasswordRequest request) throws ResetPasswordException, InvalidKeySpecException, NoSuchAlgorithmException {
        log.info("Request for password reset");
        User user = userRepository.findByUserName(request.getUserName());
        if(user != null){
            if(user.getSecurityQuestionId() == request.getQuestion() &&
            user.getSecurityQuestionAnswer().equals(request.getAnswer())){
                user.setPassword(EncryptDecryptUtil.encrypt(request.getNewPassword(),secretKey));
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

    @Override
    public void generateOtp(String email) throws ResetPasswordException {
        if(email != null){
           User user = userRepository.findByEmail(email);
           if(user != null){
               String otp = GoBikeUtil.generateRandomNumber(1000, 9999);
               MailService.sendMail(user.getEmail(),"OTP for password reset",otp);
               user.setOtp(otp);
               userRepository.save(user);
           }
        }
        throw new ResetPasswordException();
    }

    @Override
    public boolean verifyOtp(String userName, String otp){
        User user = userRepository.findByUserName(userName);
        return otp.equals(user.getOtp());
    }

    @Override
    public ResponseEntity<?> signOut(HttpServletRequest req, HttpServletResponse res) {
        Map<String, Object> result = new HashMap<>();
//        HttpSession session=req.getSession();
        System.out.println("terminating session for " + req.getSession().getAttribute("username"));
        req.getSession().invalidate();
        result.put("TerminateSession", "true");
        return ResponseEntity.ok(result);
    }

    @Override
    public void resetPassword(String email, String password) {
        User user = userRepository.findByEmail(email);
        user.setPassword(EncryptDecryptUtil.encrypt(password,secretKey));
        userRepository.save(user);
    }
}
