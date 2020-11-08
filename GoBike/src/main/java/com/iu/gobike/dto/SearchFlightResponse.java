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
public class SearchFlightResponse {
    private String travelClass;
    private String travelDate;
    private String returnDate;
    private int adults;
    private List<FlightInfo> flights;
    private List<FlightInfo> returnFlights;

}
