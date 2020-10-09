package com.iu.gobike.controllers;

import com.iu.gobike.dto.RegisterUserRequest;
import com.iu.gobike.dto.ResetPasswordRequest;
import com.iu.gobike.exception.ResetPasswordException;
import com.iu.gobike.model.User;
import com.iu.gobike.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;
import javax.persistence.EntityExistsException;

/**
 * @author jbhushan
 */
@RestController
@RequestMapping(path = "/user")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * This API is responsible for registering New User to the system
     * @param request
     *          Request object containing all the required information for Registration
     * @param password
     *          Password to be set in the system. It is passed in request header
     * @return Registered User detail
     */
    @PostMapping(path = "/register", consumes = "application/json")
    public ResponseEntity<String> register(@RequestBody RegisterUserRequest request, @RequestParam("password") String password) {
        ResponseEntity<String> responseEntity= null;
        try {
            userService.register(request, password);
            responseEntity = ResponseEntity.ok().build();
        }catch(EntityExistsException e){
            responseEntity = ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(e.getMessage()+" already exists");
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
     * @param request
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
}
