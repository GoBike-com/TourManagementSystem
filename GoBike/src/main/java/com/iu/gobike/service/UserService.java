package com.iu.gobike.service;

import com.iu.gobike.dto.RegisterUserRequest;
import com.iu.gobike.dto.ResetPasswordRequest;
import com.iu.gobike.exception.ResetPasswordException;
import com.iu.gobike.model.User;

import javax.naming.AuthenticationException;
import javax.persistence.EntityExistsException;

public interface UserService {

    void register(RegisterUserRequest registerUserRequest, String password) throws EntityExistsException;

    User login(String userName, String password) throws AuthenticationException;

    String resetPassword(ResetPasswordRequest request) throws ResetPasswordException;
}
