package com.iu.gobike.dto;

import com.iu.gobike.enums.TravelClass;
import lombok.*;

import java.time.Clock;
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
    private TravelClass travelClass;
    private String travelDate;
    private String returnDate;
    private int adults;
    private List<FlightInfo> flights;
    private List<FlightInfo> returnFlights;

}
