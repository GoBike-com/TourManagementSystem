package com.iu.gobike.dto;

import lombok.*;

import java.time.Instant;

/**
 * @author jbhushan
 */
@Setter
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class AddPlanRequest {

    private Instant date;
    private String description;
    private String itineraryName;
    private String loggedInUser;

}
