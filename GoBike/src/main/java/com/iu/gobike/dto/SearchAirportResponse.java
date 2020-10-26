package com.iu.gobike.dto;

import com.iu.gobike.amadeus.model.travel.Airport;
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
public class SearchAirportResponse {

    List<Airport> data;
}
