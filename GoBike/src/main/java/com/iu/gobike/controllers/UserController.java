package com.iu.gobike.controllers;

import com.iu.gobike.exception.ResetPasswordException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.iu.gobike.dto.ResetPasswordRequest;
import com.iu.gobike.model.User;
import com.iu.gobike.service.UserService;

import javax.naming.AuthenticationException;

/**
 * @author jbhushan
 */
@RestController
@RequestMapping(path = "/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(path = "/register", consumes = "application/json")
    public ResponseEntity<String> register(@RequestBody ResetPasswordRequest request) {
        ResponseEntity<String> responseEntity= null;
        // TODO: Jyoti
        try {
           // userService.resetPassword(request);
            responseEntity = ResponseEntity.ok().build();
        } catch (Exception e) {
            responseEntity = ResponseEntity.status(HttpStatus.NON_AUTHORITATIVE_INFORMATION).build();
        }
        return responseEntity;
    }

    @GetMapping(path = "/login", consumes = "application/json")
    public ResponseEntity<User> login(@RequestParam String userName, @RequestParam String password) {
        ResponseEntity<User> responseEntity= null;
        try {
            User user = userService.login(userName,password);
            responseEntity = ResponseEntity.ok(user);
        } catch (AuthenticationException e) {
            responseEntity = ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return responseEntity;
    }

    @PostMapping(path = "/password/reset", consumes = "application/json")
    public ResponseEntity<String> resetPassword(@RequestBody ResetPasswordRequest request) {
        ResponseEntity<String> responseEntity= null;
        try {
            userService.resetPassword(request);
            responseEntity = ResponseEntity.ok().build();
        } catch (ResetPasswordException e) {
            responseEntity = ResponseEntity.status(HttpStatus.NON_AUTHORITATIVE_INFORMATION).build();
        }
        return responseEntity;
    }
}
