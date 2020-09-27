package tms.gobike.service;

import tms.gobike.dto.ResetPasswordRequest;

public interface LoginService {

    String resetPassword(ResetPasswordRequest request);
}
