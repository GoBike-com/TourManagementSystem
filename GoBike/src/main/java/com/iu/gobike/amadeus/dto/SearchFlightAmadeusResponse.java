package com.iu.gobike.amadeus.dto;

import com.iu.gobike.amadeus.model.travel.Dictionary;
import com.iu.gobike.amadeus.model.travel.Flight;
import com.iu.gobike.amadeus.model.travel.FlightItinerary;
import com.iu.gobike.amadeus.model.travel.Price;
import lombok.*;

import java.util.List;

/**
 * @author jbhushan
 */
@Setter
@Getter
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class SearchFlightAmadeusResponse {
    private List<Flight> data;
    private Dictionary dictionaries;
}
