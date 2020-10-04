package com.iu.gobike.service;

import com.iu.gobike.constant.GoBikeConstant;
import com.iu.gobike.dto.ResetPasswordRequest;
import com.iu.gobike.exception.ResetPasswordException;
import com.iu.gobike.model.User;
import com.iu.gobike.repository.UserRepository;
import com.iu.gobike.service.UserService;
import com.iu.gobike.service.UserServiceImpl;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.naming.AuthenticationException;

import static org.mockito.Mockito.doThrow;

/**
 * @author jbhushan
 */
@RunWith(SpringJUnit4ClassRunner.class)
public class UserServiceTest {

    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    private User user;
    private ResetPasswordRequest request;

    @Before
    public void setUp(){
        userService = new UserServiceImpl(userRepository,passwordEncoder);
        user = User.builder().id(1L).firstName("Aa").lastName("Bb").password("jo")
                .userName("user").securityQuestionId(1).securityQuestionAnswer("ans").build();
        request = ResetPasswordRequest.builder().userName("A").question(1).answer("ans").newPassword("kp").build();

    }

    @Test
    public void resetPassword() throws ResetPasswordException {
        Mockito.when(userRepository.findByUserName(Mockito.anyString())).thenReturn(user);
        request.setUserName("user");
        String response = userService.resetPassword(request);
        Assert.assertEquals(GoBikeConstant.SUCCESS, response);
    }

    @Test(expected = ResetPasswordException.class)
    public void resetPassword_invalidRequest() throws ResetPasswordException {
         userService.resetPassword(request);
    }

//    @Test
//    public void login() throws AuthenticationException {
//        Mockito.when(userRepository.findByUserNameAndPassword(Mockito.anyString(),Mockito.anyString())).thenReturn(user);
//        User user1 = userService.login("user","jo");
//        Assert.assertEquals(user.getId(), user1.getId());
//    }

    @Test(expected = AuthenticationException.class)
    public void login_failure() throws AuthenticationException {
        Mockito.when(userRepository.findByUserNameAndPassword(Mockito.anyString(),Mockito.anyString())).thenReturn(null);
        userService.login("user","hhu");
    }
}
