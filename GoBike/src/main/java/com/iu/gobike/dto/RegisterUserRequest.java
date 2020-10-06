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
public class RegisterUserRequest {

    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String city;
    private String postalCode;
    private int question;
    private String answer;
}
