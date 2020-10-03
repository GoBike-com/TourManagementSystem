package com.iu.gobike.service;

import com.iu.gobike.dto.ResetPasswordRequest;
import com.iu.gobike.exception.ResetPasswordException;
import com.iu.gobike.model.User;

import javax.naming.AuthenticationException;

public interface UserService {

    User login(String userName, String password) throws AuthenticationException;

    String resetPassword(ResetPasswordRequest request) throws ResetPasswordException;
}
