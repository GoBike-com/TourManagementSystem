package com.iu.gobike.controllers;

import com.iu.gobike.dto.RegisterUserRequest;
import com.iu.gobike.model.User;
import com.iu.gobike.service.UserService;
import org.hibernate.UnknownProfileException;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;
import javax.persistence.EntityExistsException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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

    @GetMapping(path = "/search/{username}")
    public ResponseEntity<List<String>> search(@PathVariable String username) {
        return ResponseEntity.ok(userService.search(username));
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
    @PostMapping(path = "/login", consumes = "application/json")
    public ResponseEntity<User> login(HttpServletRequest request, HttpServletResponse response) {
        ResponseEntity<User> responseEntity= null;
        try {
            Map<String, String> postBody = getPostBodyInAMap(request);
            String username = postBody.get("userName");
            String password = postBody.get("password");
            System.out.println(postBody);
        	
//        	HttpSession session = request.getSession();
//        	session.setAttribute("username", userName);
//        	
//            System.out.println("usernameeeeeeeeeeeeeeeeeeee" + session.getAttribute("username"));
            
            User user = userService.login(username,password, request,response);
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
//    @PostMapping(path = "/password/reset", consumes = "application/json")
//    public ResponseEntity<String> resetPassword(@RequestBody ResetPasswordRequest request,HttpServletRequest req, HttpServletResponse response) {
//        ResponseEntity<String> responseEntity= null;
//        
//        try {
////        	Map<String, String> postBody = convertRequest(req);
//            userService.resetPassword(request);
//            responseEntity = ResponseEntity.ok().build();
//        } catch (ResetPasswordException e) {
//            responseEntity = ResponseEntity.status(HttpStatus.NON_AUTHORITATIVE_INFORMATION).build();
//        } catch (Exception e) {
//            responseEntity = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//        return responseEntity;
//    }

    /**
     * This API is responsible for sending otp for resetting password
     *
     * @return Success if userName was valid else error
     */
    @PostMapping(path = "/otp/{email}", consumes = "application/json")
    public ResponseEntity<String> generateOtp(@PathVariable String email,HttpServletRequest request ) {
        ResponseEntity<String> responseEntity= null;
        request.getSession().setAttribute("email", email);
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
    @PostMapping(path = "/otp/verify", consumes = "application/json")
    public ResponseEntity<?> verifyOTP(HttpServletRequest request,HttpServletResponse response) {
         return userService.verifyOtp(request, response);
    }

    @RequestMapping(value = "/logout", method = {RequestMethod.GET})
    public ResponseEntity<?> logoutUser(HttpServletRequest request, HttpServletResponse response) {
    	System.out.println("Logging out for " + request.getSession().getAttribute("user"));
        return userService.signOut(request,response);
    }

    /**
     * This API is responsible for resetting password
     *
     * @return Success if userName was valid else error
     */
    @PostMapping(path = "/password", consumes = "application/json")
    public ResponseEntity<?> resetPassword(HttpServletRequest request, HttpServletResponse response) {
    	return userService.resetPassword(request,response);
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
    
}
