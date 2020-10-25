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
public class SearchFlightRequest {

    private String source;
    private String destination;
    private boolean roundTrip;
    private Instant travelDate;
    private Instant returnDate;
    private int passengerCount;

}
