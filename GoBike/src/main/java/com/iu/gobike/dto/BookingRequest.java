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
public class BookingRequest {

    private String itineraryName;
    private String userName;
    private List<Integer> flightIds;
    private List<Integer> hotelIds;

}