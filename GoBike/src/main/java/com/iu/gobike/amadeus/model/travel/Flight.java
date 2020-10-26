package com.iu.gobike.amadeus.model.travel;

import lombok.*;

import java.util.List;

/**
 * @author jbhushan
 */
@Getter
@Setter
@ToString
@EqualsAndHashCode
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Flight {

    private Price price;
    private List<FlightItinerary> itineraries;
    private Integer numberOfBookableSeats;
}
