package com.iu.gobike.controllers;

import com.iu.gobike.dto.RegisterUserRequest;
import com.iu.gobike.dto.ResetPasswordRequest;
import com.iu.gobike.exception.ResetPasswordException;
import com.iu.gobike.model.User;
import com.iu.gobike.service.UserService;
import org.hibernate.UnknownProfileException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;
import javax.persistence.EntityExistsException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author jbhushan
 */
@RestController
@RequestMapping(path = "/user")
@CrossOrigin(origins = "*",allowedHeaders = "*", allowCredentials = "true")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<Iterable<User>> users() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping(path = "/{username}")
    public ResponseEntity<User> findUser(@PathVariable String username) {
        return ResponseEntity.ok(userService.findByUserName(username));
    }

    /**
     * This API is responsible for registering New User to the system
     * @param request
     *          Request object containing all the required information for Registration
     * @param password
     *          Password to be set in the system. It is passed in request header
     * @return Registered User detail
     */
    @PostMapping(path = "/register", consumes = "application/json")
    public ResponseEntity<String> register(@RequestBody RegisterUserRequest request,@RequestParam("password") String password) {
        ResponseEntity<String> responseEntity= null;
        try {
            userService.register(request, password);
            responseEntity = ResponseEntity.ok().build();
        }catch(EntityExistsException e){
            responseEntity = ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage()+" already exists");
        }catch (Exception e) {
            responseEntity = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return responseEntity;
    }

    /**
     * This API is responsible for successfully login User with the given credential
     * @param userName
     * @param password
     * @return return User Details on success else Authorization Error
     */
    @CrossOrigin
    @GetMapping(path = "/login", consumes = "application/json")
    public ResponseEntity<User> login(@RequestParam("username") String userName, @RequestParam("password") String password) {
        ResponseEntity<User> responseEntity= null;
        try {
            User user = userService.login(userName,password);
            responseEntity = ResponseEntity.ok(user);
        } catch (AuthenticationException e) {
            responseEntity = ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        } catch (Exception e) {
            responseEntity = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return responseEntity;
    }

    /**
     * This API is responsible for reset password. It validates User on the basis of
     * security question before setting password.
     * @return Success message if password is reset else error message
     */
    @PostMapping(path = "/password/reset", consumes = "application/json")
    public ResponseEntity<String> resetPassword(@RequestBody ResetPasswordRequest request) {
        ResponseEntity<String> responseEntity= null;
        try {
            userService.resetPassword(request);
            responseEntity = ResponseEntity.ok().build();
        } catch (ResetPasswordException e) {
            responseEntity = ResponseEntity.status(HttpStatus.NON_AUTHORITATIVE_INFORMATION).build();
        } catch (Exception e) {
            responseEntity = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return responseEntity;
    }

    /**
     * This API is responsible for sending otp for resetting password
     *
     * @return Success if userName was valid else error
     */
    @PostMapping(path = "/otp/{email}", consumes = "application/json")
    public ResponseEntity<String> generateOtp(@PathVariable String email) {
        ResponseEntity<String> responseEntity= null;
        try {
            responseEntity = ResponseEntity.ok(userService.generateOtp(email));
        } catch (UnknownProfileException e) {
            responseEntity = ResponseEntity.status(HttpStatus.NON_AUTHORITATIVE_INFORMATION).build();
        }
        return responseEntity;
    }

    /**
     * This API is responsible for sending otp for resetting password
     *
     * @return Success if userName was valid else error
     */
    @GetMapping(path = "/otp/verify", consumes = "application/json")
    public ResponseEntity<Boolean> verifyOtp(HttpServletRequest request, @RequestParam("otp") String otp) {
         return ResponseEntity.ok(userService.verifyOtp((String) request.getSession().getAttribute("username"), otp));
    }

    @RequestMapping(value = "/logout", method = {RequestMethod.GET})
    public ResponseEntity<?> logoutUser(HttpServletRequest request, HttpServletResponse response) {
        return userService.signOut(request,response);
    }

    /**
     * This API is responsible for resetting password
     *
     * @return Success if userName was valid else error
     */
    @PutMapping(path = "/password", consumes = "application/json")
    public ResponseEntity<String> resetPassword(@RequestHeader("password") String password, HttpServletRequest request) {
        userService.resetPassword((String) request.getSession().getAttribute("emailID"),password);
         return ResponseEntity.ok().build();
    }
}
