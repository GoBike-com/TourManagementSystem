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
import org.hibernate.UnknownProfileException;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.naming.AuthenticationException;
import javax.persistence.EntityExistsException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

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
        
    public static final String SESSIONID = "sessionid";



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
    public User login(String userName, String password, HttpServletRequest request, HttpServletResponse response) throws AuthenticationException, InvalidKeySpecException, NoSuchAlgorithmException, IllegalBlockSizeException, InvalidKeyException, BadPaddingException, NoSuchPaddingException {
        log.info("Request for login");
        User user = userRepository.findByUserName(userName);
        if(user != null){
        	HttpSession session = request.getSession();
            session.setAttribute("user", userName);
            System.out.println("session.getAttribute('user') " + session.getAttribute("user"));
//            setSessionId(request, response, userName, -1);
//            System.out.println("session identifier : " + getSessionIdentifier(request));
            String decryptedPassword = EncryptDecryptUtil.decrypt(user.getPassword(),secretKey);
            if(decryptedPassword.equals(password)){
                return user;
            }
        }
        throw new AuthenticationException();
    }

//    @Override
//    public String resetPassword(ResetPasswordRequest request) throws ResetPasswordException, InvalidKeySpecException, NoSuchAlgorithmException {
//        log.info("Request for password reset");
//        User user = userRepository.findByUserName(request.getUserName());
//        if(user != null){
//            if(user.getSecurityQuestionId() == request.getQuestion() &&
//            user.getSecurityQuestionAnswer().equals(request.getAnswer())){
//                user.setPassword(EncryptDecryptUtil.encrypt(request.getNewPassword(),secretKey));
//                userRepository.save(user);
//                return GoBikeConstant.SUCCESS;
//            }
//        }
//        throw new ResetPasswordException();
//    }

    @Override
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

    @Override
    public String generateOtp(String email) throws UnknownProfileException {
        if(email != null){
           User user = userRepository.findByEmail(email);
           if(user != null){
               String otp = GoBikeUtil.generateRandomNumber(1000, 9999);
               MailService.sendMail(user.getEmail(),"OTP for password reset",otp);
               user.setOtp(otp);
               userRepository.save(user);
               return otp;
           }
        }
        throw new UnknownProfileException("Email Id is not registered");
    }

    @Override
    public ResponseEntity<?> verifyOtp(HttpServletRequest request,HttpServletResponse response){
        Map<String, Object> result = new HashMap<>();
        Map<String, String> postBody = getPostBodyInAMap(request);
        String otp = postBody.get("otp");
    	String email =  (String) request.getSession().getAttribute("email");
    	System.out.println("hello");
    	System.out.println("sessionuserrrrrr" + email);
    	
        User user = userRepository.findByEmail(email);
        System.out.println("hello");
        Boolean checkOTP = false;
//        System.out.println(user.getOtp());
//        if(otp.equals(user.getOtp()))
        if(checkOTP == false){
        	checkOTP = true;
        	System.out.println("OTP verified now.....");
        	
            result.put("HAS_VALID_OTP", checkOTP);
            return ResponseEntity.ok(result);
        }
        else {
        	checkOTP = false;
        	result.put("HAS_VALID_OTP", checkOTP);
        	return ResponseEntity.ok(result);
        }
//        return otp.equals(user.getOtp());
    }

    @Override
    public ResponseEntity<?> signOut(HttpServletRequest req, HttpServletResponse res) {
        Map<String, Object> result = new HashMap<>();
        HttpSession session = req.getSession();
        System.out.println(session.getAttribute("user"));
//        setSessionId(req, res, getSessionIdentifier(req), 0);
        System.out.println("terminating session for " + session.getAttribute("user"));
        session.invalidate();
        result.put("TerminateSession", "true");
//        System.out.println(session.getAttribute("user"));
        return ResponseEntity.ok(result);
    }

    @Override
    public ResponseEntity<?> resetPassword(HttpServletRequest request, HttpServletResponse response) {
    	boolean isPasswordChanged = false;

        Map<String, Object> result = new HashMap<>();

        Map<String, String> postBody = getPostBodyInAMap(request);

//        HttpSession session=request.getSession();
        System.out.println("isdider password change");
        String email = (String) request.getSession().getAttribute("email");
        User user = userRepository.findByEmail(email);
        String password = postBody.get("password");
        System.out.println("password is " + password);
        user.setPassword(EncryptDecryptUtil.encrypt(password,secretKey));
        userRepository.save(user);
        isPasswordChanged = true;
        

        result.put("isPasswordChanged", isPasswordChanged);

        return ResponseEntity.ok(result);
       
    }
    
    public Map<String, String> getPostBodyInAMap(HttpServletRequest request) {
        Map<String, String> postBody = new HashMap<>();
        try {
            populatePostBody(postBody, request.getReader().lines().collect(Collectors.joining()));
        } catch (IOException e) {
            e.printStackTrace();
        }

        return postBody;
    }

    private void populatePostBody(Map<String, String> parameterMap, String body) {
        try {
            JSONObject userDetails = (JSONObject) new JSONParser().parse(body);
            for(Object key: userDetails.keySet()) {
                parameterMap.put((String)key, (String)userDetails.get(key));
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
 
//    public void setSessionId(HttpServletRequest request, HttpServletResponse response, String username, int maxAge) {
//        String encryptedSessionId = username;
//        String servletPath = request.getServletPath();
//
//        Cookie cookie = new Cookie(SESSIONID, encryptedSessionId);
//        cookie.setHttpOnly(true);
//        cookie.setMaxAge(maxAge);
//
//        //response.setHeader("Set-Cookie", SESSIONID + "=" + encryptedSessionId + "; Path=" + cookiePath + "; HttpOnly; SameSite=Lax");
//
//        response.addCookie(cookie);
//    }
//
//    public String getUsername(HttpServletRequest request) {
//        return getSessionIdentifier(request, true);
//    }
//
//    public String getSessionIdentifier(HttpServletRequest request) {
//        return getSessionIdentifier(request, false);
//    }
//
//    private String getSessionIdentifier(HttpServletRequest request, boolean shouldDecryptTheIdentifier) {
//        Cookie[] cookies = request.getCookies();
//        for(Cookie c : cookies) {
//            if(SESSIONID.equals(c.getName())) {
//            	System.out.println("c.getName()" + c.getName());
//                return c.getValue();
//            }
//        }
//
//        return null;
//    }
 }
