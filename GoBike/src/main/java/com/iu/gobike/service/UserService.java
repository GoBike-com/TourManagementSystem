package com.iu.gobike.service;

import com.iu.gobike.dto.RegisterUserRequest;
import com.iu.gobike.dto.ResetPasswordRequest;
import com.iu.gobike.exception.ResetPasswordException;
import com.iu.gobike.model.User;
import org.hibernate.UnknownProfileException;
import org.springframework.http.ResponseEntity;

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

/**
 * @author jbhushan
 */
public interface UserService {

    void register(RegisterUserRequest registerUserRequest, String password) throws EntityExistsException, InvalidKeySpecException, NoSuchAlgorithmException;

    User login(String userName, String password,HttpServletRequest request ) throws AuthenticationException, InvalidKeySpecException, NoSuchAlgorithmException, IllegalBlockSizeException, InvalidKeyException, BadPaddingException, NoSuchPaddingException;

//    ResponseEntity<?> resetPassword(ResetPasswordRequest request) throws ResetPasswordException, InvalidKeySpecException, NoSuchAlgorithmException;

    Iterable<User> getAllUsers();

    User findByUserName(String userName);

    String generateOtp(String username) throws UnknownProfileException;

//    ResponseEntity<?> verifyOtp(String userName, String otp);

    ResponseEntity<?> signOut(HttpServletRequest req, HttpServletResponse res);

    ResponseEntity<?> resetPassword(HttpServletRequest request,HttpServletResponse response);

//	ResponseEntity<?> verifyOtp(HttpServletRequest request, HttpServletRequest response);

	ResponseEntity<?> verifyOtp(HttpServletRequest request, HttpServletResponse response);
}
