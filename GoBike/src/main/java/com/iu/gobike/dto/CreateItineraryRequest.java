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
public class CreateItineraryRequest {

    private String name;
    private String startDate;
    private String endDate;

}
