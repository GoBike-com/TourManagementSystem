package com.iu.gobike.amadeus.model.token;

import lombok.*;

/**
 * @author jbhushan
 */
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TokenResponse {

    private String access_token;
}
