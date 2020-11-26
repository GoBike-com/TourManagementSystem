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
public class RatingRequest {

    private String userName;
    private String place;
    private Integer rating;

}
