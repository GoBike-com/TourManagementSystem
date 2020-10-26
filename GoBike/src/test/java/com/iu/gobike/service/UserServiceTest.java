package com.iu.gobike.service;

import com.iu.gobike.constant.GoBikeConstant;
import com.iu.gobike.dto.ResetPasswordRequest;
import com.iu.gobike.exception.ResetPasswordException;
import com.iu.gobike.model.User;
import com.iu.gobike.repository.UserRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;

/**
 * @author jbhushan
 */
@RunWith(SpringJUnit4ClassRunner.class)
public class UserServiceTest {

    private UserService userService;

    @Mock
    private UserRepository userRepository;

    private User user;
    private ResetPasswordRequest request;

    private String secretKey = "op";

    @Before
    public void setUp(){
        userService = new UserServiceImpl();
        user = User.builder().firstName("Aa").lastName("Bb").password("jo")
                .securityQuestionId(1).securityQuestionAnswer("ans").build();
        request = ResetPasswordRequest.builder().userName("A").question(1).answer("ans").newPassword("kp").build();

    }

    @Test
    public void resetPassword() throws ResetPasswordException, InvalidKeySpecException, NoSuchAlgorithmException {
        Mockito.when(userRepository.findByUserName(Mockito.anyString())).thenReturn(user);
        request.setUserName("user");
        String response = userService.resetPassword(request);
        Assert.assertEquals(GoBikeConstant.SUCCESS, response);
    }

    @Test(expected = ResetPasswordException.class)
    public void resetPassword_invalidRequest() throws ResetPasswordException, InvalidKeySpecException, NoSuchAlgorithmException {
        userService.resetPassword(request);
    }
}
