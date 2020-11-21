package com.iu.gobike.dto;

import lombok.*;

import java.util.List;

/**
 * @author jbhushan
 */
@Setter
@Getter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
public class GetItineraryDetailsResponse {

    private String userName;
    private List<ItineraryDetail> itineraryDetails;

}
