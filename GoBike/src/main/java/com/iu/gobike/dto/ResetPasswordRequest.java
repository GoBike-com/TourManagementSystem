package com.iu.gobike.dto;

import lombok.*;

/**
 * @author jbhushan
 */
@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class ResetPasswordRequest {

    private int question;
    private String answer;
    private String userName;
    private String newPassword;
}
