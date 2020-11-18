package com.iu.gobike.dto;

import lombok.*;

/**
 * @author jbhushan
 */
@Setter
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class AddUserToItineraryRequest {

    private String userName;
    private String itineraryName;
    private String newUserName;

}
