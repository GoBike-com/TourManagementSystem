package tms.gobike.dto;

import lombok.*;
import tms.gobike.model.SecurityQuestion;

/**
 * @author jbhushan
 */
@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class ResetPasswordRequest {

    private SecurityQuestion question;
    private String answer;
    private String userName;
    private String newPassword;
}
